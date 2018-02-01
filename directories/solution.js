const hapi = require('hapi');

const server = new hapi.Server();

server.connection({
  port: process.argv[2] || 8080,
  host: 'localhost',
});
server.start((err) => {
  if (err) throw err;
});

module.exports = server;
