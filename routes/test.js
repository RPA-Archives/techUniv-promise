const server = require('./solution.js');
const request = require('supertest');

describe('test for routes', () => {
  it('should pass the hello {name} test case', (done) => {
    request(server.listener)
      .get('/ram')
      .then((response) => {
        expect(response.text).toBe('Hello ram');
        done();
      }).catch(console.log);
  });
  it('should pass the hello when nothing is passed', (done) => {
    request(server.listener)
      .get('/')
      .then((response) => {
        expect(response.text).toBe('Hello ');
        done();
      }).catch(console.log);
  });
});
