var EventService =  require('../service/mock-event');
var Boom = require('boom');

exports.list = function (request,reply) {
  return reply (EventService.findAll())
};

exports.listOne = function (request,reply) {
  var id = request.params.id;
  var Event = EventService.findEvent(id);

  if(!Event){
    return reply(Boom.notFound('Id does not exist, please check Event list'))
  }

  return reply (EventService.findEvent(id));
};

exports.add = function(request,reply) {

  //TODO: security check

  var Event = request.payload;
  EventService.add(Event);
  return reply(Event).code(201)
};

exports.delete =function (request,reply) {
  //TODO: security check
  var id = request.params.id;

  if(!id){
    return reply(Boom.notFound('Id does not exist, please check list again'))
  }

  EventService.delete(id);
  return reply (EventService.findAll()).code(200)
};

exports.edit = function(request,reply) {
  //TODO: security check
  var Event = request.payload;
  var id = request.params.id;

  return reply(EventService.edit(id,Event)).code(200)
};
