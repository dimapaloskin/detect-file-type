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

});
