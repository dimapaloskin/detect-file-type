import {assert} from 'chai';
import detect from './index';
import isHtml from 'is-html';

describe('custom function', () => {
  it(`should detect html without fixture`, (done) => {
    detect.addCustomFunction((buffer) => {
      const str = buffer.toString();
      if (isHtml(str)) {
        return {
          ext: 'html',
          mime: 'text/html'
        }
      }

      return false;
    });

    detect.fromFile('./files/fixture-strong-html.html', (err, result) => {
      assert.equal(err, null);
      assert.deepEqual(result, {
        ext: 'html',
        mime: 'text/html'
      });
      done();
    });
  });
});
