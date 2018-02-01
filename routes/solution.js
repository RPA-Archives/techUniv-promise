const hapi = require('hapi');

const server = new hapi.Server();
server.connection({
  host: 'localhost',
  port: process.argv[2] || 8080,
});
server.route({
  path: '/{name*}',
  method: 'GET',
  handler: (request, reply) => reply(`Hello ${request.params.name}`),
});
// server.start((error) => {
//   if (error) {
//     console.log(error.message);
//   } else {
//     console.log('server started at port', server.connection.port);
//   }
// });
module.exports = server;
