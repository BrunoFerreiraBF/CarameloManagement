

/*
var pokemons = require('./pokemon');

exports.endpoints =[
  {method:'GET',path: '/api/pokemons', config:pokemons.list},
  {method:'GET',path: '/api/pokemons/{id}', config: pokemons.listOne},
  {method:'DELETE',path: '/api/pokemons/{id}', config: pokemons.delete},
  {method:'POST',path: '/api/pokemons/add', config: pokemons.add},
  {method:'PUT',path: '/api/pokemons/edit/{id}', config: pokemons.edit}
];
*/

var inventory = require('./inventory');
var employee = require('./employee');
var events = require('./events');


exports.endpoints =[
  {method:'GET',path: '/api/inventory', config:inventory.list},
  {method:'GET',path: '/api/inventory/{id}', config: inventory.listOne},
  {method:'GET',path: '/api/employee', config: employee.list},
  {method:'GET',path: '/api/employee/{id}', config: employee.listOne},
  {method:'GET',path: '/api/events', config: events.list},
  {method:'GET',path: '/api/events/{id}', config: events.listOne},

  {method:'POST',path: '/api/inventory/add', config:inventory.add},
  {method:'PUT',path: '/api/inventory/edit/{id}', config: inventory.edit},
  {method:'POST',path: '/api/employee/add', config: employee.add},
  {method:'PUT',path: '/api/employee/edit/{id}', config: employee.edit},
  {method:'POST',path: '/api/events/add', config: events.add},
  {method:'PUT',path: '/api/events/edit/{id}', config: events.edit},

  {method:'DELETE',path: '/api/inventory/{id}', config: inventory.delete},
  {method:'DELETE',path: '/api/employee/{id}', config: employee.delete},
  {method:'DELETE',path: '/api/events/{id}', config: events.delete},
];
