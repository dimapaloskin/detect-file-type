'use strict';

var _chai = require('chai');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('file formats', function () {

  it('should detect jpg', function (done) {
    _index2.default.fromFile('./files/fixture.jpg', function (err, result) {
      _chai.assert.equal(err, null);
      _chai.assert.deepEqual(result, {
        ext: 'jpg',
        mime: 'image/jpeg'
      });
      done();
    });
  });

  it('should detect png', function (done) {
    _index2.default.fromFile('./files/fixture.png', function (err, result) {
      _chai.assert.equal(err, null);
      _chai.assert.deepEqual(result, {
        ext: 'png',
        mime: 'image/png'
      });
      done();
    });
  });

  it('should detect gif', function (done) {
    _index2.default.fromFile('./files/fixture.gif', function (err, result) {
      _chai.assert.equal(err, null);
      _chai.assert.deepEqual(result, {
        ext: 'gif',
        mime: 'image/gif'
      });
      done();
    });
  });

  it('should detect bmp', function (done) {
    _index2.default.fromFile('./files/fixture.bmp', function (err, result) {
      _chai.assert.equal(err, null);
      _chai.assert.deepEqual(result, {
        ext: 'bmp',
        mime: 'image/bmp'
      });
      done();
    });
  });

  it('should detect webp', function (done) {
    _index2.default.fromFile('./files/fixture.webp', function (err, result) {
      _chai.assert.equal(err, null);
      _chai.assert.deepEqual(result, {
        ext: 'webp',
        mime: 'image/webp'
      });
      done();
    });
  });

  it('should detect tif (first)', function (done) {
    _index2.default.fromFile('./files/fixture-big-endian.tif', function (err, result) {
      _chai.assert.equal(err, null);
      _chai.assert.deepEqual(result, {
        ext: 'tif',
        mime: 'image/tiff'
      });
      done();
    });
  });

  it('should detect tif (second)', function (done) {
    _index2.default.fromFile('./files/fixture-little-endian.tif', function (err, result) {
      _chai.assert.equal(err, null);
      _chai.assert.deepEqual(result, {
        ext: 'tif',
        mime: 'image/tiff'
      });
      done();
    });
  });

  it('should detect cr2', function (done) {
    _index2.default.fromFile('./files/fixture.cr2', function (err, result) {
      _chai.assert.equal(err, null);
      _chai.assert.deepEqual(result, {
        ext: 'cr2',
        mime: 'image/x-canon-cr2'
      });
      done();
    });
  });

  it('should detect jxr', function (done) {
    _index2.default.fromFile('./files/fixture.jxr', function (err, result) {
      _chai.assert.equal(err, null);
      _chai.assert.deepEqual(result, {
        ext: 'jxr',
        mime: 'image/vnd.ms-photo'
      });
      done();
    });
  });

  it('should detect psd', function (done) {
    _index2.default.fromFile('./files/fixture.psd', function (err, result) {
      _chai.assert.equal(err, null);
      _chai.assert.deepEqual(result, {
        ext: 'psd',
        mime: 'image/vnd.adobe.photoshop'
      });
      done();
    });
  });

  it('should detect zip', function (done) {
    _index2.default.fromFile('./files/fixture.zip', function (err, result) {
      _chai.assert.equal(err, null);
      _chai.assert.deepEqual(result, {
        ext: 'zip',
        mime: 'application/zip'
      });
      done();
    });
  });

  it('should detect epub', function (done) {
    _index2.default.fromFile('./files/fixture.epub', function (err, result) {
      _chai.assert.equal(err, null);
      _chai.assert.deepEqual(result, {
        ext: 'epub',
        mime: 'application/epub+zip'
      });
      done();
    });
  });

  it('should detect xpi', function (done) {
    _index2.default.fromFile('./files/fixture.xpi', function (err, result) {
      _chai.assert.equal(err, null);
      _chai.assert.deepEqual(result, {
        ext: 'xpi',
        mime: 'application/x-xpinstall'
      });
      done();
    });
  });

  it('should detect tar', function (done) {
    _index2.default.fromFile('./files/fixture.tar', function (err, result) {
      _chai.assert.equal(err, null);
      _chai.assert.deepEqual(result, {
        ext: 'tar',
        mime: 'application/x-tar'
      });
      done();
    });
  });

  it('should detect rar', function (done) {
    _index2.default.fromFile('./files/fixture.rar', function (err, result) {
      _chai.assert.equal(err, null);
      _chai.assert.deepEqual(result, {
        ext: 'rar',
        mime: 'application/x-rar-compressed'
      });
      done();
    });
  });

  it('should detect gz', function (done) {
    _index2.default.fromFile('./files/fixture.tar.gz', function (err, result) {
      _chai.assert.equal(err, null);
      _chai.assert.deepEqual(result, {
        ext: 'gz',
        mime: 'application/gzip'
      });
      done();
    });
  });

  it('should detect bz2', function (done) {
    _index2.default.fromFile('./files/fixture.bz2', function (err, result) {
      _chai.assert.equal(err, null);
      _chai.assert.deepEqual(result, {
        ext: 'bz2',
        mime: 'application/x-bzip2'
      });
      done();
    });
  });

  it('should detect 7z', function (done) {
    _index2.default.fromFile('./files/fixture.7z', function (err, result) {
      _chai.assert.equal(err, null);
      _chai.assert.deepEqual(result, {
        ext: '7z',
        mime: 'application/x-7z-compressed'
      });
      done();
    });
  });

  it('should detect dmg', function (done) {
    _index2.default.fromFile('./files/fixture.dmg', function (err, result) {
      _chai.assert.equal(err, null);
      _chai.assert.deepEqual(result, {
        ext: 'dmg',
        mime: 'application/x-apple-diskimage'
      });
      done();
    });
  });

  it('should detect mp4', function (done) {
    _index2.default.fromFile('./files/fixture.mp4', function (err, result) {
      _chai.assert.equal(err, null);
      _chai.assert.deepEqual(result, {
        ext: 'mp4',
        mime: 'video/mp4'
      });
      done();
    });
  });

  it('should detect m4v', function (done) {
    _index2.default.fromFile('./files/fixture.m4v', function (err, result) {
      _chai.assert.equal(err, null);
      _chai.assert.deepEqual(result, {
        ext: 'm4v',
        mime: 'video/x-m4v'
      });
      done();
    });
  });
});