const server = require('./solution');
const fs = require('fs');

describe('Should pass basic test for directories', () => {
  it('should sent correct file with content', (done) => {
    const options = {
      method: 'GET',
      path: '/foo/bar/baz/file.html',
    };
    server.inject(options, (response) => {
      fs.readFile('/Users/ramprasadagarwal/Desktop/hapi/directories/file.html', 'utf-8', (err, res) => {
        if (err) throw err;
        expect(response).toBe(res);
        done();
      });
    });
  });
});
