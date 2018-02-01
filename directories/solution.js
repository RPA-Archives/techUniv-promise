const hapi = require('hapi');
const Path = require('path');
const Inert = require('inert');

const server = new hapi.Server();

server.connection({
  port: process.argv[2] || 8080,
  host: 'localhost',
});
server.start((err) => {
  if (err) throw err;
});
server.register(Inert, (err) => {
  if (err) throw err;
});
server.route({
  path: '/foo/bar/baz/file.html',
  method: 'GET',
  handler: {
    file: Path.join(__dirname, 'file.html'),
  },
});
module.exports = server;
