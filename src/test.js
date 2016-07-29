import {assert} from 'chai';
import detect from './index';

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

  it('should detect mp4', (done) => {
    detect.fromFile('./files/fixture.mp4', (err, result) => {
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
        mime: 'video/x-m4v'
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
        mime: 'audio/m4a'
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
        mime: 'application/x-msdownload'
      });
      done();
    });
  });

  it('should detect swf', (done) => {
    detect.fromFile('./files/fixture.swf', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'swf',
        mime: 'application/x-shockwave-flash'
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

});
