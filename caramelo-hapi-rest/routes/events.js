var Joi = require('joi');
var Ctrl = require('../controller/event');

exports.list = {
  description:'List events',
  handler: Ctrl.list,
  cors: {
    origin: ['*'],
    additionalHeaders: ['cache-control', 'x-requested-with']
  },
};

exports.listOne = {
  description:'List event by id',
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
  description:'Delete event by id',
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
  description:'Create an event',
  handler: Ctrl.add,
  validate:{
    payload:{
      //id:Joi.number().integer().positive().required(),
      name: Joi.string().min(3).max(10).required(),
      dataInit: Joi.string().min(3).max(10).required(),
      dataEnd: Joi.string().min(3).max(10).required(),
      local:Joi.string().min(3).max(10).required(),
      obs:Joi.string().min(3).max(10).required(),
      price:Joi.number(),
    }
  },
  cors: {
    origin: ['*'],
    additionalHeaders: ['cache-control', 'x-requested-with']
  },
};

exports.edit = {
  description:'Edit an event',
  handler: Ctrl.edit,
  validate:{
    payload:{
      name: Joi.string().min(3).max(10).required(),
      dataInit: Joi.string().min(3).max(10).required(),
      dataEnd: Joi.string().min(3).max(10).required(),
      local:Joi.string().min(3).max(10).required(),
      obs:Joi.string().min(3).max(10).required(),
      price:Joi.number(),
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
