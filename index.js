'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _signatures = require('./signatures.json');

var _signatures2 = _interopRequireDefault(_signatures);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var customFunctions = [];

var noopCallback = function noopCallback() {};
var DEFAULT_BUFFER_SIZE = 500;

function getRuleDetection() {
  var v = false;

  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  for (var i = 0, len = args.length; i < len; i++) {
    var detection = args[i];

    if (typeof detection === 'boolean') {
      v = detection ? v || detection : false;
    } else {
      v = typeof v === 'boolean' ? {} : v;
      if ('ext' in detection) v.ext = detection.ext;
      if ('mime' in detection) v.mime = detection.mime;
      if ('iana' in detection) v.iana = detection.iana;
    }
  }

  return v;
}

var validatedSignaturesCache = false;

exports.default = {
  fromFile: function fromFile(filePath, bufferLength, callback) {
    var _this = this;

    if (typeof bufferLength === 'function') {
      callback = bufferLength;
      bufferLength = undefined;
    }

    this.getFileSize(filePath, function (err, fileSize) {

      if (err) {
        return callback(err);
      }

      _fs2.default.open(filePath, 'r', function (err, fd) {

        if (err) {
          return callback(err);
        }

        _this.fromFd(fd, Math.min(bufferLength || DEFAULT_BUFFER_SIZE, fileSize), callback);
      });
    });
  },
  fromFd: function fromFd(fd, bufferLength, callback) {
    var _this2 = this;

    if (typeof bufferLength === 'function') {
      callback = bufferLength;
      bufferLength = undefined;
    }

    var bufferSize = bufferLength;
    if (!bufferSize) {
      bufferSize = DEFAULT_BUFFER_SIZE;
    }

    var buffer = new Buffer(bufferSize);

    _fs2.default.read(fd, buffer, 0, bufferSize, 0, function (err, data) {

      _fs2.default.close(fd, noopCallback);

      if (err) {
        return callback(err);
      }

      _this2.fromBuffer(buffer, callback);
    });
  },
  fromBuffer: function fromBuffer(buffer, callback) {
    var _this3 = this;

    var result = null;

    if (!validatedSignaturesCache) {
      validatedSignaturesCache = this.validateSigantures();
    }

    if (Array.isArray(validatedSignaturesCache)) {
      return callback(validatedSignaturesCache);
    }

    _signatures2.default.every(function (signature) {
      var detection = _this3.detect(buffer, signature.rules);

      if (detection) {
        result = getRuleDetection({}, signature, detection);
        return false;
      }

      return true;
    });

    if (result === null) {
      customFunctions.every(function (fn) {
        var fnResult = fn(buffer);
        if (fnResult) {
          result = fnResult;
          return false;
        };
        return true;
      });
    }

    callback(null, result);
  },
  detect: function detect(buffer, rules, type) {
    var _this4 = this;

    if (!type) {
      type = 'and';
    }

    var detectedRule = true;

    rules.every(function (rule) {
      if (rule.type === 'equal') {
        if (!(rule.bytes instanceof Buffer)) rule.bytes = Buffer.from(rule.bytes, typeof rule.bytes === 'string' ? 'hex' : null);
        var end = Math.min(typeof rule.end === 'number' ? rule.end : buffer.length, buffer.length);

        detectedRule = getRuleDetection(detectedRule, buffer.compare(rule.bytes, undefined, undefined, rule.start || 0, end) === 0 ? rule : false);

        return _this4.isReturnFalse(detectedRule, type);
      }

      if (rule.type === 'notEqual') {
        if (!(rule.bytes instanceof Buffer)) rule.bytes = Buffer.from(rule.bytes, typeof rule.bytes === 'string' ? 'hex' : null);
        var _end = Math.min(typeof rule.end === 'number' ? rule.end : buffer.length, buffer.length);

        detectedRule = getRuleDetection(detectedRule, buffer.compare(rule.bytes, undefined, undefined, rule.start || 0, _end) !== 0 ? rule : false);

        return _this4.isReturnFalse(detectedRule, type);
      }

      if (rule.type === 'contains') {
        if (!(rule.bytes instanceof Buffer)) rule.bytes = Buffer.from(rule.bytes, typeof rule.bytes === 'string' ? 'hex' : null);

        detectedRule = getRuleDetection(detectedRule, buffer.slice(rule.start || 0, rule.end || buffer.length).includes(rule.bytes) ? rule : false);

        return _this4.isReturnFalse(detectedRule, type);
      }

      if (rule.type === 'notContains') {
        if (!(rule.bytes instanceof Buffer)) rule.bytes = Buffer.from(rule.bytes, typeof rule.bytes === 'string' ? 'hex' : null);

        detectedRule = getRuleDetection(detectedRule, !buffer.slice(rule.start || 0, rule.end || buffer.length).includes(rule.bytes) ? rule : false);

        return _this4.isReturnFalse(detectedRule, type);
      }

      if (rule.type === 'or') {
        detectedRule = getRuleDetection(detectedRule, _this4.detect(buffer, rule.rules, 'or'));
        return _this4.isReturnFalse(detectedRule, type);
      }

      if (rule.type === 'and') {
        detectedRule = getRuleDetection(detectedRule, _this4.detect(buffer, rule.rules, 'and'));
        return _this4.isReturnFalse(detectedRule, type);
      }

      if (rule.type === 'default') {
        detectedRule = getRuleDetection(detectedRule, rule);
        return _this4.isReturnFalse(detectedRule, type);
      }

      return true;
    });

    return detectedRule;
  },
  isReturnFalse: function isReturnFalse(isDetected, type) {
    if (!isDetected && type === 'and') {
      return false;
    }

    if (isDetected && type === 'or') {
      return false;
    }

    return true;
  },
  validateRuleType: function validateRuleType(rule) {
    var types = ['or', 'and', 'contains', 'notContains', 'equal', 'notEqual', 'default'];
    return types.indexOf(rule.type) !== -1;
  },
  validateSigantures: function validateSigantures() {
    var _this5 = this;

    var invalidSignatures = _signatures2.default.map(function (signature) {
      return _this5.validateSignature(signature);
    }).filter(Boolean);

    if (invalidSignatures.length) {
      return invalidSignatures;
    }

    return true;
  },
  validateSignature: function validateSignature(signature) {

    if (!('type' in signature)) {
      return {
        message: 'signature does not contain "type" field',
        signature: signature
      };
    }

    if (!('rules' in signature)) {
      return {
        message: 'signature does not contain "rules" field',
        signature: signature
      };
    }

    var validations = this.validateRules(signature.rules);

    if (!('ext' in signature) && !validations.hasExt) {
      return {
        message: 'signature does not contain "ext" field',
        signature: signature
      };
    }

    if (!('mime' in signature) && !validations.hasMime) {
      return {
        message: 'signature does not contain "mime" field',
        signature: signature
      };
    }

    if (Array.isArray(validations)) {
      return {
        message: 'signature has invalid rule',
        signature: signature,
        rules: validations
      };
    }
  },
  validateRules: function validateRules(rules) {
    var _this6 = this;

    var validations = rules.map(function (rule) {
      var isRuleTypeValid = _this6.validateRuleType(rule);

      if (!isRuleTypeValid) {
        return {
          message: 'rule type not supported',
          rule: rule
        };
      }

      if ((rule.type === 'or' || rule.type === 'and') && !('rules' in rule)) {
        return {
          message: 'rule should contains "rules" field',
          rule: rule
        };
      }

      if (rule.type === 'or' || rule.type === 'and') {
        return _this6.validateRules(rule.rules);
      }

      return {
        hasExt: 'ext' in rule,
        hasMime: 'mime' in rule
      };
    });

    var invalid = validations.filter(function (x) {
      return x.message;
    });
    var valid = validations.filter(function (x) {
      return !x.message;
    });

    if (!invalid) return invalid;

    return {
      hasExt: valid.some(function (x) {
        return x.hasExt;
      }),
      hasMime: valid.some(function (x) {
        return x.hasMime;
      })
    };
  },
  addSignature: function addSignature(signature) {
    validatedSignaturesCache = false;
    _signatures2.default.push(signature);
  },
  addCustomFunction: function addCustomFunction(fn) {
    customFunctions.push(fn);
  },
  getFileSize: function getFileSize(filePath, callback) {
    _fs2.default.stat(filePath, function (err, stat) {
      if (err) {
        return callback(err);
      }

      return callback(null, stat.size);
    });
  }
};
module.exports = exports['default'];