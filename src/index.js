import fs from 'fs';
import signatures from './signatures.json';

const customFunctions = [];

const noopCallback = function () {};
const DEFAULT_BUFFER_SIZE = 500;

function getRuleDetection(...args) {
  let v = false;

  for (let i = 0, len = args.length; i < len; i++) {
    let detection = args[i];

    if (typeof detection === 'boolean') {
        v = detection ? v || detection : false;
    }
    else {
      v = typeof v === 'boolean' ? {} : v;
      if ('ext' in detection) v.ext = detection.ext;
      if ('mime' in detection) v.mime = detection.mime;
      if ('iana' in detection) v.iana = detection.iana;
    }
  }

  return v;
}

let validatedSignaturesCache = false;

export default {

  fromFile(filePath, bufferLength, callback) {

    if (typeof bufferLength === 'function') {
      callback = bufferLength;
      bufferLength = undefined;
    }

    this.getFileSize(filePath, (err, fileSize) => {

      if (err) {
        return callback(err);
      }

      fs.open(filePath, 'r', (err, fd) => {

        if (err) {
          return callback(err);
        }

        this.fromFd(
          fd,
          Math.min(bufferLength || DEFAULT_BUFFER_SIZE, fileSize),
          callback);
      });
    });
  },

  fromFd(fd, bufferLength, callback) {

    if (typeof bufferLength === 'function') {
      callback = bufferLength;
      bufferLength = undefined;
    }

    let bufferSize = bufferLength;
    if (!bufferSize) {
      bufferSize = DEFAULT_BUFFER_SIZE;
    }

    const buffer = new Buffer(bufferSize);

    fs.read(fd, buffer, 0, bufferSize, 0, (err, data) => {

      fs.close(fd, noopCallback);

      if (err) {
        return callback(err);
      }

      this.fromBuffer(buffer, callback);
    });
  },

  fromBuffer(buffer, callback) {

    let result = null;

    if (!validatedSignaturesCache) {
      validatedSignaturesCache = this.validateSigantures();
    }

    if (Array.isArray(validatedSignaturesCache)) {
      return callback(validatedSignaturesCache);
    }

    signatures.every((signature) => {
      let detection = this.detect(buffer, signature.rules);

      if (detection) {
        result = getRuleDetection({}, signature, detection);
        return false;
      }

      return true;
    });

    if (result === null) {
      customFunctions.every((fn) => {
        const fnResult = fn(buffer);
        if (fnResult) {
          result = fnResult;
          return false;
        };
        return true;
      });
    }

    callback(null, result);
  },

  detect(buffer, rules, type) {
    if (!type) {
      type = 'and';
    }

    let detectedRule = true;

    rules.every((rule) => {
      if (rule.type === 'equal') {
        if (!(rule.bytes instanceof Buffer))
          rule.bytes = Buffer.from(rule.bytes, typeof rule.bytes === 'string' ? 'hex' : null);
        const end = Math.min(typeof rule.end === 'number' ? rule.end : buffer.length, buffer.length);

        detectedRule = getRuleDetection(
            detectedRule,
            buffer.compare(rule.bytes, undefined, undefined, rule.start || 0, end) === 0
                ? rule
                : false
        );

        return this.isReturnFalse(detectedRule, type);
      }

      if (rule.type === 'notEqual') {
        if (!(rule.bytes instanceof Buffer))
          rule.bytes = Buffer.from(rule.bytes, typeof rule.bytes === 'string' ? 'hex' : null);
        const end = Math.min(typeof rule.end === 'number' ? rule.end : buffer.length, buffer.length);

        detectedRule = getRuleDetection(
            detectedRule,
            buffer.compare(rule.bytes, undefined, undefined, rule.start || 0, end) !== 0
                ? rule
                : false
        );

        return this.isReturnFalse(detectedRule, type);
      }

      if (rule.type === 'contains') {
        if (!(rule.bytes instanceof Buffer))
          rule.bytes = Buffer.from(rule.bytes, typeof rule.bytes === 'string' ? 'hex' : null);

        detectedRule = getRuleDetection(
            detectedRule,
            buffer.slice(rule.start || 0, rule.end || buffer.length).includes(rule.bytes)
                ? rule
                : false
        );

        return this.isReturnFalse(detectedRule, type);
      }

      if (rule.type === 'notContains') {
        if (!(rule.bytes instanceof Buffer))
          rule.bytes = Buffer.from(rule.bytes, typeof rule.bytes === 'string' ? 'hex' : null);

        detectedRule = getRuleDetection(
            detectedRule,
            !buffer.slice(rule.start || 0, rule.end || buffer.length).includes(rule.bytes)
                ? rule
                : false
        );

        return this.isReturnFalse(detectedRule, type);
      }

      if (rule.type === 'or') {
        detectedRule = getRuleDetection(detectedRule, this.detect(buffer, rule.rules, 'or'));
        return this.isReturnFalse(detectedRule, type);
      }

      if (rule.type === 'and') {
        detectedRule = getRuleDetection(detectedRule, this.detect(buffer, rule.rules, 'and'));
        return this.isReturnFalse(detectedRule, type);
      }

      if (rule.type === 'default') {
        detectedRule = getRuleDetection(detectedRule, rule);
        return this.isReturnFalse(detectedRule, type);
      }

      return true;
    });

    return detectedRule;
  },

  isReturnFalse(isDetected, type) {
    if (!isDetected && type === 'and') {
      return false;
    }

    if (isDetected && type === 'or') {
      return false;
    }

    return true;
  },

  validateRuleType(rule) {
    const types = ['or', 'and', 'contains', 'notContains', 'equal', 'notEqual', 'default'];
    return (types.indexOf(rule.type) !== -1);
  },

  validateSigantures() {

    let invalidSignatures = signatures
        .map((signature) => {
          return this.validateSignature(signature);
        })
        .filter(Boolean);

    if (invalidSignatures.length) {
      return invalidSignatures;
    }

    return true;
  },

  validateSignature(signature) {

    if (!('type' in signature)) {
      return {
        message: 'signature does not contain "type" field',
        signature
      };
    }

    if (!('rules' in signature)) {
      return {
        message: 'signature does not contain "rules" field',
        signature
      };
    }

    const validations = this.validateRules(signature.rules);

    if (!('ext' in signature) && !validations.hasExt) {
      return {
        message: 'signature does not contain "ext" field',
        signature
      };
    }

    if (!('mime' in signature) && !validations.hasMime) {
      return {
        message: 'signature does not contain "mime" field',
        signature
      };
    }

    if (Array.isArray(validations)) {
      return {
        message: 'signature has invalid rule',
        signature,
        rules: validations
      }
    }
  },

  validateRules(rules) {

    let validations = rules.map((rule) => {
      let isRuleTypeValid = this.validateRuleType(rule);

      if (!isRuleTypeValid) {
        return {
          message: 'rule type not supported',
          rule
        };
      }

      if ((rule.type === 'or' || rule.type === 'and') && !('rules' in rule)) {
        return {
          message: 'rule should contains "rules" field',
          rule
        };
      }

      if (rule.type === 'or' || rule.type === 'and') {
        return this.validateRules(rule.rules);
      }

      return {
        hasExt: 'ext' in rule,
        hasMime: 'mime' in rule,
      };
    });

    let invalid = validations.filter(x => x.message);
    let valid = validations.filter(x => !x.message);

    if (!invalid)
      return invalid;

    return {
      hasExt: valid.some(x => x.hasExt),
      hasMime: valid.some(x => x.hasMime),
    };
  },

  addSignature(signature) {
    validatedSignaturesCache = false;
    signatures.push(signature);
  },

  addCustomFunction(fn) {
    customFunctions.push(fn);
  },

  getFileSize(filePath, callback) {
    fs.stat(filePath, (err, stat) => {
      if (err) {
        return callback(err);
      }

      return callback(null, stat.size);
    });
  }

};
