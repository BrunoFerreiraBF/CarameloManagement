var Hapi = require('hapi');
var api = require('./routes')
var server = new Hapi.Server();

server.connection({
  host:'localhost',
  port: Number(process.argv[2]) || 3000
});

server.route(api.endpoints);

server.start(function(err){
  if(err){
    //throw err;
  }
  console.log('Server reunning at:',server.info.uri);
});
