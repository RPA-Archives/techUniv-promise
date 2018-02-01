const server = require('./solution');
const request = require('supertest');
const fs = require('fs');

describe('Should pass basic test for file handling', () => {
  it('should sent correct file with content', (done) => {
    request(server.listener)
      .get('/')
      .then((response) => {
        const { text } = response;
        fs.readFile('/Users/ramprasadagarwal/Desktop/hapi/handling/index.html', 'utf-8', (err, res) => {
          if (err) throw err;
          expect(text).toBe(res);
          done();
        });
      });
  });
});
