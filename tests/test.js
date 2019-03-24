import {assert} from 'chai';
import detect from '../src/index';
import './custom-functions.test';

describe('file formats', () => {

  it('should detect jpg', (done) => {
    detect.fromFile('./files/fixture.jpg', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'jpg',
        mime: 'image/jpeg'
      });
      done();
    });
  });

  it('should detect png', (done) => {
    detect.fromFile('./files/fixture.png', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'png',
        mime: 'image/png'
      });
      done();
    });
  });

  it('should detect gif', (done) => {
    detect.fromFile('./files/fixture.gif', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'gif',
        mime: 'image/gif'
      });
      done();
    });
  });

  it('should detect bmp', (done) => {
    detect.fromFile('./files/fixture.bmp', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'bmp',
        mime: 'image/bmp'
      });
      done();
    });
  });

  it('should detect webp', (done) => {
    detect.fromFile('./files/fixture.webp', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'webp',
        mime: 'image/webp'
      });
      done();
    });
  });

  it('should detect tif (first)', (done) => {
    detect.fromFile('./files/fixture-big-endian.tif', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'tif',
        mime: 'image/tiff'
      });
      done();
    });
  });

  it('should detect tif (second)', (done) => {
    detect.fromFile('./files/fixture-little-endian.tif', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'tif',
        mime: 'image/tiff'
      });
      done();
    });
  });

  it('should detect cr2', (done) => {
    detect.fromFile('./files/fixture.cr2', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'cr2',
        mime: 'image/x-canon-cr2'
      });
      done();
    });
  });

  it('should detect jxr', (done) => {
    detect.fromFile('./files/fixture.jxr', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'jxr',
        mime: 'image/vnd.ms-photo'
      });
      done();
    });
  });

  it('should detect psd', (done) => {
    detect.fromFile('./files/fixture.psd', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'psd',
        mime: 'image/vnd.adobe.photoshop'
      });
      done();
    });
  });

  it('should detect zip', (done) => {
    detect.fromFile('./files/fixture.zip', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'zip',
        mime: 'application/zip'
      });
      done();
    });
  });

  it('should detect epub', (done) => {
    detect.fromFile('./files/fixture.epub', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'epub',
        mime: 'application/epub+zip'
      });
      done();
    });
  });

  it('should detect xpi', (done) => {
    detect.fromFile('./files/fixture.xpi', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'xpi',
        mime: 'application/x-xpinstall'
      });
      done();
    });
  });

  it('should detect tar', (done) => {
    detect.fromFile('./files/fixture.tar', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'tar',
        mime: 'application/x-tar'
      });
      done();
    });
  });

  it('should detect rar', (done) => {
    detect.fromFile('./files/fixture.rar', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'rar',
        mime: 'application/x-rar-compressed'
      });
      done();
    });
  });

  it('should detect gz', (done) => {
    detect.fromFile('./files/fixture.tar.gz', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'gz',
        mime: 'application/gzip'
      });
      done();
    });
  });

  it('should detect bz2', (done) => {
    detect.fromFile('./files/fixture.bz2', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'bz2',
        mime: 'application/x-bzip2'
      });
      done();
    });
  });

  it('should detect 7z', (done) => {
    detect.fromFile('./files/fixture.7z', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: '7z',
        mime: 'application/x-7z-compressed'
      });
      done();
    });
  });

  it('should detect dmg', (done) => {
    detect.fromFile('./files/fixture.dmg', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'dmg',
        mime: 'application/x-apple-diskimage'
      });
      done();
    });
  });

  it('should detect mp4 (M4V+M4A)', (done) => {
    detect.fromFile('./files/fixture.mp4', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'mp4',
        mime: 'video/mp4'
      });
      done();
    });
  });

  it('should detect mp4 (mpeg42)', (done) => {
    detect.fromFile('./files/fixture-mpeg42.mp4', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'mp4',
        mime: 'video/mp4'
      });
      done();
    });
  });

  it('should detect mp4 (isom)', (done) => {
    detect.fromFile('./files/fixture-isom.mp4', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'mp4',
        mime: 'video/mp4'
      });
      done();
    });
  });

  it('should detect m4v', (done) => {
    detect.fromFile('./files/fixture.m4v', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'm4v',
        mime: 'video/mp4'
      });
      done();
    });
  });

  it('should detect midi', (done) => {
    detect.fromFile('./files/fixture.mid', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'mid',
        mime: 'audio/midi'
      });
      done();
    });
  });

  it('should detect mkv', (done) => {
    detect.fromFile('./files/fixture.mkv', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'mkv',
        mime: 'video/x-matroska'
      });
      done();
    });
  });

  it('should detect webm', (done) => {
    detect.fromFile('./files/fixture.webm', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'webm',
        mime: 'video/webm'
      });
      done();
    });
  });

  it('should detect wmv', (done) => {
    detect.fromFile('./files/fixture.wmv', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'wmv',
        mime: 'video/x-ms-wmv'
      });
      done();
    });
  });

  it('should detect mpg', (done) => {
    detect.fromFile('./files/fixture.mpg', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'mpg',
        mime: 'video/mpeg'
      });
      done();
    });
  });

  it('should detect mp3', (done) => {
    detect.fromFile('./files/fixture.mp3', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'mp3',
        mime: 'audio/mpeg'
      });
      done();
    });
  });

  it('should detect m4a', (done) => {
    detect.fromFile('./files/fixture.m4a', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'm4a',
        mime: 'audio/mp4'
      });
      done();
    });
  });

  it('should detect 3gpp', (done) => {
    detect.fromFile('./files/fixture.3gp', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: '3gp',
        mime: 'video/3gpp'
      });
      done();
    });
  });

  it('should detect opus', (done) => {
    detect.fromFile('./files/fixture.opus', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'opus',
        mime: 'audio/opus'
      });
      done();
    });
  });

  it('should detect ogg', (done) => {
    detect.fromFile('./files/fixture.ogg', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'ogg',
        mime: 'audio/ogg'
      });
      done();
    });
  });

  it('should detect oga', (done) => {
    detect.fromFile('./files/fixture.oga', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'oga',
        mime: 'audio/ogg'
      });
      done();
    });
  });

  it('should detect ogv', (done) => {
    detect.fromFile('./files/fixture.ogv', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'ogv',
        mime: 'video/ogg'
      });
      done();
    });
  });

  it('should detect spx', (done) => {
    detect.fromFile('./files/fixture.spx', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'spx',
        mime: 'audio/ogg'
      });
      done();
    });
  });

  it('should detect flac', (done) => {
    detect.fromFile('./files/fixture.flac', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'flac',
        mime: 'audio/x-flac'
      });
      done();
    });
  });

  it('should detect wav', (done) => {
    detect.fromFile('./files/fixture.wav', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'wav',
        mime: 'audio/x-wav'
      });
      done();
    });
  });

  it('should detect amr', (done) => {
    detect.fromFile('./files/fixture.amr', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'amr',
        mime: 'audio/amr'
      });
      done();
    });
  });

  it('should detect pdf', (done) => {
    detect.fromFile('./files/fixture.pdf', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'pdf',
        mime: 'application/pdf'
      });
      done();
    });
  });

  it('should detect exe', (done) => {
    detect.fromFile('./files/fixture.exe', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'exe',
        mime: 'application/x-msdownload',
        iana: "application/vnd.microsoft.portable-executable"
      });
      done();
    });
  });

  it('should detect swf', (done) => {
    detect.fromFile('./files/fixture.swf', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'swf',
        mime: 'application/x-shockwave-flash',
        iana: "application/vnd.adobe.flash.movie"
      });
      done();
    });
  });

  it('should detect rtf', (done) => {
    detect.fromFile('./files/fixture.rtf', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'rtf',
        mime: 'application/rtf'
      });
      done();
    });
  });

  it('should detect mov', (done) => {
    detect.fromFile('./files/fixture.mov', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'mov',
        mime: 'video/quicktime'
      });
      done();
    });
  });

  it('should detect avi', (done) => {
    detect.fromFile('./files/fixture.avi', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'avi',
        mime: 'video/x-msvideo'
      });
      done();
    });
  });

  it('should detect woff', (done) => {
    detect.fromFile('./files/fixture.woff', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'woff',
        mime: 'application/font-woff',
        iana: 'font/woff',
      });
      done();
    });
  });

  it('should detect woff2', (done) => {
    detect.fromFile('./files/fixture.woff2', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'woff2',
        mime: 'application/font-woff',
        iana: 'font/woff2',
      });
      done();
    });
  });

  it('should detect eot', (done) => {
    detect.fromFile('./files/fixture.eot', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'eot',
        mime: 'application/vnd.ms-fontobject'
      });
      done();
    });
  });

  it('should detect ttf', (done) => {
    detect.fromFile('./files/fixture.ttf', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'ttf',
        mime: 'application/font-sfnt',
        iana: 'font/ttf',
      });
      done();
    });
  });

  it('should detect otf', (done) => {
    detect.fromFile('./files/fixture.otf', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'otf',
        mime: 'application/font-sfnt',
        iana: 'font/otf',
      });
      done();
    });
  });

  it('should detect ico', (done) => {
    detect.fromFile('./files/fixture.ico', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'ico',
        mime: 'image/x-icon',
        iana: 'image/vnd.microsoft.icon'
      });
      done();
    });
  });

  it('should detect flv', (done) => {
    detect.fromFile('./files/fixture.flv', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'flv',
        mime: 'video/x-flv'
      });
      done();
    });
  });

  it('should detect ps', (done) => {
    detect.fromFile('./files/fixture.ps', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'ps',
        mime: 'application/postscript'
      });
      done();
    });
  });

  it('should detect xz', (done) => {
    detect.fromFile('./files/fixture.tar.xz', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'xz',
        mime: 'application/x-xz'
      });
      done();
    });
  });

  it('should detect sqlite', (done) => {
    detect.fromFile('./files/fixture.sqlite', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'sqlite',
        mime: 'application/x-sqlite3',
        iana: 'application/vnd.sqlite3'
      });
      done();
    });
  });

  it('should detect nes', (done) => {
    detect.fromFile('./files/fixture.nes', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'nes',
        mime: 'application/x-nintendo-nes-rom'
      });
      done();
    });
  });

  it('should detect crx', (done) => {
    detect.fromFile('./files/fixture.crx', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'crx',
        mime: 'application/x-google-chrome-extension'
      });
      done();
    });
  });

  it('should detect cab', (done) => {
    detect.fromFile('./files/fixture.cab', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'cab',
        mime: 'application/vnd.ms-cab-compressed'
      });
      done();
    });
  });

  it('should detect deb', (done) => {
    detect.fromFile('./files/fixture.deb', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'deb',
        mime: 'application/x-deb'
      });
      done();
    });
  });

  it('should detect ar', (done) => {
    detect.fromFile('./files/fixture.ar', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'ar',
        mime: 'application/x-unix-archive'
      });
      done();
    });
  });

  it('should detect rpm', (done) => {
    detect.fromFile('./files/fixture.rpm', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'rpm',
        mime: 'application/x-rpm'
      });
      done();
    });
  });

  it('should detect tar.Z', (done) => {
    detect.fromFile('./files/fixture.tar.Z', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'Z',
        mime: 'application/x-compress'
      });
      done();
    });
  });

  it('should detect lz', (done) => {
    detect.fromFile('./files/fixture.tar.lz', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'lz',
        mime: 'application/x-lzip'
      });
      done();
    });
  });

  it('should detect msi', (done) => {
    detect.fromFile('./files/fixture.msi', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'msi',
        mime: 'application/x-msi'
      });
      done();
    });
  });

  it('should detect svg', (done) => {
    detect.fromFile('./files/fixture.svg', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'svg',
        mime: 'image/svg+xml'
      });
      done();
    });
  });

  it('should detect flif', (done) => {
    detect.fromFile('./files/fixture.flif', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'flif',
        mime: 'image/flif'
      });
      done();
    });
  });

  it('should detect html started with html tag', (done) => {
    detect.fromFile('./files/fixture-simple-html.html', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'html',
        mime: 'text/html'
      });
      done();
    });
  });

});
