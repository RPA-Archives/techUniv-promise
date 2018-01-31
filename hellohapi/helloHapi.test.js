const server = require('./helloHapi.js');
const request = require('supertest');

describe('test for hapi server start', () => {
  it('should pass the hello hapi test case', (done) => {
    request(server.listener)
      .get('/')
      .then((response) => {
        expect(response.text).toBe('Hello hapi');
        done();
      }).catch(console.log);
  });
});
