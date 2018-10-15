'use strict';

var _chai = require('chai');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

require('./custom-functions.test');

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

  it('should detect midi', function (done) {
    _index2.default.fromFile('./files/fixture.mid', function (err, result) {
      _chai.assert.equal(err, null);
      _chai.assert.deepEqual(result, {
        ext: 'mid',
        mime: 'audio/midi'
      });
      done();
    });
  });

  it('should detect mkv', function (done) {
    _index2.default.fromFile('./files/fixture.mkv', function (err, result) {
      _chai.assert.equal(err, null);
      _chai.assert.deepEqual(result, {
        ext: 'mkv',
        mime: 'video/x-matroska'
      });
      done();
    });
  });

  it('should detect webm', function (done) {
    _index2.default.fromFile('./files/fixture.webm', function (err, result) {
      _chai.assert.equal(err, null);
      _chai.assert.deepEqual(result, {
        ext: 'webm',
        mime: 'video/webm'
      });
      done();
    });
  });

  it('should detect wmv', function (done) {
    _index2.default.fromFile('./files/fixture.wmv', function (err, result) {
      _chai.assert.equal(err, null);
      _chai.assert.deepEqual(result, {
        ext: 'wmv',
        mime: 'video/x-ms-wmv'
      });
      done();
    });
  });

  it('should detect mpg', function (done) {
    _index2.default.fromFile('./files/fixture.mpg', function (err, result) {
      _chai.assert.equal(err, null);
      _chai.assert.deepEqual(result, {
        ext: 'mpg',
        mime: 'video/mpeg'
      });
      done();
    });
  });

  it('should detect mp3', function (done) {
    _index2.default.fromFile('./files/fixture.mp3', function (err, result) {
      _chai.assert.equal(err, null);
      _chai.assert.deepEqual(result, {
        ext: 'mp3',
        mime: 'audio/mpeg'
      });
      done();
    });
  });

  it('should detect m4a', function (done) {
    _index2.default.fromFile('./files/fixture.m4a', function (err, result) {
      _chai.assert.equal(err, null);
      _chai.assert.deepEqual(result, {
        ext: 'm4a',
        mime: 'audio/m4a'
      });
      done();
    });
  });

  it('should detect opus', function (done) {
    _index2.default.fromFile('./files/fixture.opus', function (err, result) {
      _chai.assert.equal(err, null);
      _chai.assert.deepEqual(result, {
        ext: 'opus',
        mime: 'audio/opus'
      });
      done();
    });
  });

  it('should detect ogg', function (done) {
    _index2.default.fromFile('./files/fixture.ogg', function (err, result) {
      _chai.assert.equal(err, null);
      _chai.assert.deepEqual(result, {
        ext: 'ogg',
        mime: 'audio/ogg'
      });
      done();
    });
  });

  it('should detect flac', function (done) {
    _index2.default.fromFile('./files/fixture.flac', function (err, result) {
      _chai.assert.equal(err, null);
      _chai.assert.deepEqual(result, {
        ext: 'flac',
        mime: 'audio/x-flac'
      });
      done();
    });
  });

  it('should detect wav', function (done) {
    _index2.default.fromFile('./files/fixture.wav', function (err, result) {
      _chai.assert.equal(err, null);
      _chai.assert.deepEqual(result, {
        ext: 'wav',
        mime: 'audio/x-wav'
      });
      done();
    });
  });

  it('should detect amr', function (done) {
    _index2.default.fromFile('./files/fixture.amr', function (err, result) {
      _chai.assert.equal(err, null);
      _chai.assert.deepEqual(result, {
        ext: 'amr',
        mime: 'audio/amr'
      });
      done();
    });
  });

  it('should detect pdf', function (done) {
    _index2.default.fromFile('./files/fixture.pdf', function (err, result) {
      _chai.assert.equal(err, null);
      _chai.assert.deepEqual(result, {
        ext: 'pdf',
        mime: 'application/pdf'
      });
      done();
    });
  });

  it('should detect exe', function (done) {
    _index2.default.fromFile('./files/fixture.exe', function (err, result) {
      _chai.assert.equal(err, null);
      _chai.assert.deepEqual(result, {
        ext: 'exe',
        mime: 'application/x-msdownload',
        iana: "application/vnd.microsoft.portable-executable"
      });
      done();
    });
  });

  it('should detect swf', function (done) {
    _index2.default.fromFile('./files/fixture.swf', function (err, result) {
      _chai.assert.equal(err, null);
      _chai.assert.deepEqual(result, {
        ext: 'swf',
        mime: 'application/x-shockwave-flash',
        iana: "application/vnd.adobe.flash.movie"
      });
      done();
    });
  });

  it('should detect rtf', function (done) {
    _index2.default.fromFile('./files/fixture.rtf', function (err, result) {
      _chai.assert.equal(err, null);
      _chai.assert.deepEqual(result, {
        ext: 'rtf',
        mime: 'application/rtf'
      });
      done();
    });
  });

  it('should detect mov', function (done) {
    _index2.default.fromFile('./files/fixture.mov', function (err, result) {
      _chai.assert.equal(err, null);
      _chai.assert.deepEqual(result, {
        ext: 'mov',
        mime: 'video/quicktime'
      });
      done();
    });
  });

  it('should detect avi', function (done) {
    _index2.default.fromFile('./files/fixture.avi', function (err, result) {
      _chai.assert.equal(err, null);
      _chai.assert.deepEqual(result, {
        ext: 'avi',
        mime: 'video/x-msvideo'
      });
      done();
    });
  });

  it('should detect woff', function (done) {
    _index2.default.fromFile('./files/fixture.woff', function (err, result) {
      _chai.assert.equal(err, null);
      _chai.assert.deepEqual(result, {
        ext: 'woff',
        mime: 'application/font-woff'
      });
      done();
    });
  });

  it('should detect woff2', function (done) {
    _index2.default.fromFile('./files/fixture.woff2', function (err, result) {
      _chai.assert.equal(err, null);
      _chai.assert.deepEqual(result, {
        ext: 'woff2',
        mime: 'application/font-woff'
      });
      done();
    });
  });

  it('should detect eot', function (done) {
    _index2.default.fromFile('./files/fixture.eot', function (err, result) {
      _chai.assert.equal(err, null);
      _chai.assert.deepEqual(result, {
        ext: 'eot',
        mime: 'application/octet-stream'
      });
      done();
    });
  });

  it('should detect ttf', function (done) {
    _index2.default.fromFile('./files/fixture.ttf', function (err, result) {
      _chai.assert.equal(err, null);
      _chai.assert.deepEqual(result, {
        ext: 'ttf',
        mime: 'application/font-sfnt'
      });
      done();
    });
  });

  it('should detect otf', function (done) {
    _index2.default.fromFile('./files/fixture.otf', function (err, result) {
      _chai.assert.equal(err, null);
      _chai.assert.deepEqual(result, {
        ext: 'otf',
        mime: 'application/font-sfnt'
      });
      done();
    });
  });

  it('should detect ico', function (done) {
    _index2.default.fromFile('./files/fixture.ico', function (err, result) {
      _chai.assert.equal(err, null);
      _chai.assert.deepEqual(result, {
        ext: 'ico',
        mime: 'application/x-icon',
        iana: "image/vnd.microsoft.icon"
      });
      done();
    });
  });

  it('should detect flv', function (done) {
    _index2.default.fromFile('./files/fixture.flv', function (err, result) {
      _chai.assert.equal(err, null);
      _chai.assert.deepEqual(result, {
        ext: 'flv',
        mime: 'application/x-flv'
      });
      done();
    });
  });

  it('should detect ps', function (done) {
    _index2.default.fromFile('./files/fixture.ps', function (err, result) {
      _chai.assert.equal(err, null);
      _chai.assert.deepEqual(result, {
        ext: 'ps',
        mime: 'application/postscript'
      });
      done();
    });
  });

  it('should detect xz', function (done) {
    _index2.default.fromFile('./files/fixture.tar.xz', function (err, result) {
      _chai.assert.equal(err, null);
      _chai.assert.deepEqual(result, {
        ext: 'xz',
        mime: 'application/x-xz'
      });
      done();
    });
  });

  it('should detect sqlite', function (done) {
    _index2.default.fromFile('./files/fixture.sqlite', function (err, result) {
      _chai.assert.equal(err, null);
      _chai.assert.deepEqual(result, {
        ext: 'sqlite',
        mime: 'application/x-sqlite3',
        iana: 'application/vnd.sqlite3'
      });
      done();
    });
  });

  it('should detect nes', function (done) {
    _index2.default.fromFile('./files/fixture.nes', function (err, result) {
      _chai.assert.equal(err, null);
      _chai.assert.deepEqual(result, {
        ext: 'nes',
        mime: 'application/x-nintendo-nes-rom'
      });
      done();
    });
  });

  it('should detect crx', function (done) {
    _index2.default.fromFile('./files/fixture.crx', function (err, result) {
      _chai.assert.equal(err, null);
      _chai.assert.deepEqual(result, {
        ext: 'crx',
        mime: 'application/x-google-chrome-extension'
      });
      done();
    });
  });

  it('should detect cab', function (done) {
    _index2.default.fromFile('./files/fixture.cab', function (err, result) {
      _chai.assert.equal(err, null);
      _chai.assert.deepEqual(result, {
        ext: 'cab',
        mime: 'application/vnd.ms-cab-compressed'
      });
      done();
    });
  });

  it('should detect deb', function (done) {
    _index2.default.fromFile('./files/fixture.deb', function (err, result) {
      _chai.assert.equal(err, null);
      _chai.assert.deepEqual(result, {
        ext: 'deb',
        mime: 'application/x-deb'
      });
      done();
    });
  });

  it('should detect ar', function (done) {
    _index2.default.fromFile('./files/fixture.ar', function (err, result) {
      _chai.assert.equal(err, null);
      _chai.assert.deepEqual(result, {
        ext: 'ar',
        mime: 'application/x-unix-archive'
      });
      done();
    });
  });

  it('should detect rpm', function (done) {
    _index2.default.fromFile('./files/fixture.rpm', function (err, result) {
      _chai.assert.equal(err, null);
      _chai.assert.deepEqual(result, {
        ext: 'rpm',
        mime: 'application/x-rpm'
      });
      done();
    });
  });

  it('should detect tar.Z', function (done) {
    _index2.default.fromFile('./files/fixture.tar.Z', function (err, result) {
      _chai.assert.equal(err, null);
      _chai.assert.deepEqual(result, {
        ext: 'Z',
        mime: 'application/x-compress'
      });
      done();
    });
  });

  it('should detect lz', function (done) {
    _index2.default.fromFile('./files/fixture.tar.lz', function (err, result) {
      _chai.assert.equal(err, null);
      _chai.assert.deepEqual(result, {
        ext: 'lz',
        mime: 'application/x-lzip'
      });
      done();
    });
  });

  it('should detect msi', function (done) {
    _index2.default.fromFile('./files/fixture.msi', function (err, result) {
      _chai.assert.equal(err, null);
      _chai.assert.deepEqual(result, {
        ext: 'msi',
        mime: 'application/x-msi'
      });
      done();
    });
  });

  it('should detect svg', function (done) {
    _index2.default.fromFile('./files/fixture.svg', function (err, result) {
      _chai.assert.equal(err, null);
      _chai.assert.deepEqual(result, {
        ext: 'svg',
        mime: 'image/svg+xml'
      });
      done();
    });
  });

  it('should detect flif', function (done) {
    _index2.default.fromFile('./files/fixture.flif', function (err, result) {
      _chai.assert.equal(err, null);
      _chai.assert.deepEqual(result, {
        ext: 'flif',
        mime: 'image/flif'
      });
      done();
    });
  });

  it('should detect html started with html tag', function (done) {
    _index2.default.fromFile('./files/fixture-simple-html.html', function (err, result) {
      _chai.assert.equal(err, null);
      _chai.assert.deepEqual(result, {
        ext: 'html',
        mime: 'text/html'
      });
      done();
    });
  });
});