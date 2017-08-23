var employeeService =  require('../service/mock-employee');
var Boom = require('boom');

exports.list = function (request,reply) {
  return reply (employeeService.findAll())
};

exports.listOne = function (request,reply) {
  var id = request.params.id;
  var employee = employeeService.findEmployee(id);

  if(!employee){
    return reply(Boom.notFound('Id does not exist, please check employee list'))
  }

  return reply (employeeService.findEmployee(id));
};

exports.add = function(request,reply) {

  //TODO: security check

  var employee = request.payload;
  employeeService.add(employee);
  return reply(employee).code(201)
};

exports.delete =function (request,reply) {
  //TODO: security check
  var id = request.params.id;

  if(!id){
    return reply(Boom.notFound('Id does not exist, please check list again'))
  }

  employeeService.delete(id);
  return reply (employeeService.findAll()).code(200)
};

exports.edit = function(request,reply) {
  //TODO: security check
  var employee = request.payload;
  var id = request.params.id;

  return reply(employeeService.edit(id,employee)).code(200)
};
