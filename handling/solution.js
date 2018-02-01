const Inert = require('inert');
const Path = require('path');
const hapi = require('hapi');

const server = new hapi.Server();
server.register(Inert, (err) => {
  if (err) throw err;
});

server.connection({
  port: process.argv[2] || 8080,
  host: 'localhost',
});

server.route({
  path: '/',
  method: 'GET',
  handler: {
    file: Path.join(__dirname, 'index.html'),
  },
});

// server.start((err) => {
//   if (err) {
//     throw err;
//   }
//   console.log('server started');
// });
module.exports = server;
