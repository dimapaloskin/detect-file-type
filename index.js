'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _signatures = require('./signatures.json');

var _signatures2 = _interopRequireDefault(_signatures);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var customFunctions = [];

var noopCallback = function noopCallback() {};

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

        var bufferSize = bufferLength;
        if (!bufferSize) {
          bufferSize = 500;
        }

        if (fileSize < bufferSize) {
          bufferSize = fileSize;
        }

        var buffer = new Buffer(bufferSize);

        _fs2.default.read(fd, buffer, 0, bufferSize, 0, function (err, data) {

          _fs2.default.close(fd, noopCallback);

          if (err) {
            return callback(err);
          }

          _this.fromBuffer(buffer, callback);
        });
      });
    });
  },
  fromBuffer: function fromBuffer(buffer, callback) {
    var _this2 = this;

    var result = null;

    var invalidSignaturesList = this.validateSigantures();
    if (invalidSignaturesList.length) {
      return callback(invalidSignaturesList);
    }

    _signatures2.default.every(function (signature) {
      if (_this2.detect(buffer, signature.rules)) {
        result = {
          ext: signature.ext,
          mime: signature.mime
        };

        if (signature.iana) result.iana = signature.iana;

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
  detect: function detect(buffer, receivedRules, type) {
    var _this3 = this;

    if (!type) {
      type = 'and';
    }

    var rules = [].concat(_toConsumableArray(receivedRules));

    var isDetected = true;
    rules.every(function (rule) {
      if (rule.type === 'equal') {
        var slicedHex = buffer.slice(rule.start || 0, rule.end || buffer.length).toString('hex');
        isDetected = slicedHex === rule.bytes;
        return _this3.isReturnFalse(isDetected, type);
      }

      if (rule.type === 'notEqual') {
        var _slicedHex = buffer.slice(rule.start || 0, rule.end || buffer.length).toString('hex');
        isDetected = !(_slicedHex === rule.bytes);
        return _this3.isReturnFalse(isDetected, type);
      }

      if (rule.type === 'contains') {
        var _slicedHex2 = buffer.slice(rule.start || 0, rule.end || buffer.length).toString('hex');
        if (typeof rule.bytes === 'string') {
          rule.bytes = [rule.bytes];
        }
        rule.bytes.every(function (bytes) {
          isDetected = _slicedHex2.indexOf(bytes) !== -1;
          return isDetected;
        });

        return _this3.isReturnFalse(isDetected, type);
      }

      if (rule.type === 'notContains') {
        var _slicedHex3 = buffer.slice(rule.start || 0, rule.end || buffer.length).toString('hex');
        if (typeof rule.bytes === 'string') {
          rule.bytes = [rule.bytes];
        }
        rule.bytes.every(function (bytes) {
          isDetected = _slicedHex3.indexOf(bytes) === -1;
          return isDetected;
        });
        return _this3.isReturnFalse(isDetected, type);
      }

      if (rule.type === 'or') {
        isDetected = _this3.detect(buffer, rule.rules, 'or');
        return _this3.isReturnFalse(isDetected, type);
      }

      if (rule.type === 'and') {
        isDetected = _this3.detect(buffer, rule.rules, 'and');
        return _this3.isReturnFalse(isDetected, type);
      }

      return true;
    });

    return isDetected;
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

    var types = ['or', 'and', 'contains', 'notContains', 'equal', 'notEqual'];
    return types.indexOf(rule.type) !== -1;
  },
  validateSigantures: function validateSigantures() {
    var _this4 = this;

    var invalidSignatures = _signatures2.default.map(function (signature) {
      return _this4.validateSignature(signature);
    });

    invalidSignatures = this.cleanArray(invalidSignatures);

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

    if (!('ext' in signature)) {
      return {
        message: 'signature does not contain "ext" field',
        signature: signature
      };
    }

    if (!('mime' in signature)) {
      return {
        message: 'signature does not contain "mime" field',
        signature: signature
      };
    }

    if (!('rules' in signature)) {
      return {
        message: 'signature does not contain "rules" field',
        signature: signature
      };
    }

    var invalidRules = this.validateRules(signature.rules);

    if (invalidRules && invalidRules.length) {
      return {
        message: 'signature has invalid rule',
        signature: signature,
        rules: invalidRules
      };
    }
  },
  validateRules: function validateRules(rules) {
    var _this5 = this;

    var invalidRules = rules.map(function (rule) {
      var isRuleTypeValid = _this5.validateRuleType(rule);

      if (!isRuleTypeValid) {
        return {
          message: 'rule type does not supported',
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
        return _this5.validateRules(rule.rules);
      }

      return false;
    });

    invalidRules = this.cleanArray(invalidRules);

    if (invalidRules.length) {
      return invalidRules;
    }
  },
  cleanArray: function cleanArray(actual) {
    var newArray = new Array();
    for (var i = 0; i < actual.length; i++) {
      if (actual[i]) {
        newArray.push(actual[i]);
      }
    }
    return newArray;
  },
  addSignature: function addSignature(signature) {
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