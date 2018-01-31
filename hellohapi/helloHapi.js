const hapi = require('hapi');

const server = new hapi.Server();

server.connection({
  host: 'localhost',
  port: process.argv[2] || 8080,
});

server.route({
  path: '/',
  method: 'GET',
  handler: (request, reply) => reply('Hello hapi'),
});
server.start(() => {
  console.log('Server running at:', server.info.uri);
});
module.exports = server;
