const Vision = require('vision');
const Hapi = require('hapi');
const Path = require('path');
const handle = require('handlebars');

const server = new Hapi.Server();

server.register(Vision, (err) => {
  if (err) {
    console.log(err.messgae);
    throw err;
  }
});
server.connection({
  port: process.argv[2] || 8081,
  host: 'localhost',
});
server.route({
  path: '/',
  method: 'GET',
  handler: {
    view: 'index.html',
  },
});

server.views({
  engines: {
    html: handle,
  },
  path: Path.join(__dirname, 'templates'),
});

if (!module.parent) {
  server.start((error) => {
    if (error) {
      console.log(error.message);
    } else {
      console.log(`server started at port ${server.info.uri}`);
    }
  });
}
