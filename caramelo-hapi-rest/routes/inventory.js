var Joi = require('joi');
var Ctrl = require('../controller/inventory');

exports.list = {
  description:'List inventory',
  handler: Ctrl.list,
  cors: {
    origin: ['*'],
    additionalHeaders: ['cache-control', 'x-requested-with']
  },
};

exports.listOne = {
  description:'List inventory by id',
  handler: Ctrl.listOne,
  validate:{
    params:{
      id:Joi.number().integer().positive().required()
    }
  },
  cors: {
    origin: ['*'],
    additionalHeaders: ['cache-control', 'x-requested-with']
  },
};

exports.delete = {
  description:'Delete inventory by id',
  handler: Ctrl.delete,
  validate:{
    params:{
      id:Joi.number().integer().positive().required()
    }
  },
  cors: {
    origin: ['*'],
    additionalHeaders: ['cache-control', 'x-requested-with']
  },
};

exports.add = {
  description:'Create a item',
  handler: Ctrl.add,
  validate:{
    payload:{
      //id:Joi.number().integer().positive().required(),
      name: Joi.string().min(3).max(10).required(),
      type: Joi.string().min(3).max(10).required(),
      qtdTotal: Joi.string().min(3).max(10).required(),
    }
  },
  cors: {
    origin: ['*'],
    additionalHeaders: ['cache-control', 'x-requested-with']
  },
};

exports.edit = {
  description:'Edit a item',
  handler: Ctrl.edit,
  validate:{
    payload:{
      name: Joi.string().min(2).max(15),
      type: Joi.string().min(2).max(10),
      qtdTotal: Joi.number().integer(),
    },
    params:{
      id:Joi.number().integer().positive().required(),
    }
  },
  cors: {
    origin: ['*'],
    additionalHeaders: ['cache-control', 'x-requested-with']
  },
};
