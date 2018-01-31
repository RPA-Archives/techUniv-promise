const server = require('./solution.js');
const request = require('supertest');

describe('test for hapi server start', () => {
  it('should pass the hello hapi test case', (done) => {
    request(server.listener)
      .get('/ram')
      .then((response) => {
        expect(response.text).toBe('Hello ram');
        done();
      }).catch(console.log);
  });
});
