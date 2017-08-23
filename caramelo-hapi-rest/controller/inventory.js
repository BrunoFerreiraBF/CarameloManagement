var inventoryService =  require('../service/mock-inventory');
var Boom = require('boom');

exports.list = function (request,reply) {
  return reply (inventoryService.findAll())
};

exports.listOne = function (request,reply) {
  var id = request.params.id;
  var item = inventoryService.finditem(id);

  if(!item){
    return reply(Boom.notFound('Id does not exist, please check inventory list'))
  }

  return reply (inventoryService.finditem(id));
};

exports.add = function(request,reply) {

  //TODO: security check

  var item = request.payload;
  inventoryService.add(item);
  return reply(item).code(201)
};

exports.delete =function (request,reply) {
  //TODO: security check
  var id = request.params.id;

  if(!id){
    return reply(Boom.notFound('Id does not exist, you poop'))
  }

  inventoryService.delete(id);
  return reply (inventoryService.findAll()).code(200)
};

exports.edit = function(request,reply) {
  //TODO: security check
  var item = request.payload;
  var id = request.params.id;

  return reply(inventoryService.edit(id,item)).code(200)
};
