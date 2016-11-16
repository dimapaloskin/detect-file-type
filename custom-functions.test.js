'use strict';

var _chai = require('chai');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _isHtml = require('is-html');

var _isHtml2 = _interopRequireDefault(_isHtml);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('custom function', function () {
  it('should detect html without fixture', function (done) {
    _index2.default.addCustomFunction(function (buffer) {
      var str = buffer.toString();
      if (_isHtml2.default) {
        return {
          ext: 'html',
          mime: 'text/html'
        };
      }

      return false;
    });

    _index2.default.fromFile('./files/fixture-strong-html.html', function (err, result) {
      _chai.assert.equal(err, null);
      _chai.assert.deepEqual(result, {
        ext: 'html',
        mime: 'text/html'
      });
      done();
    });
  });
});