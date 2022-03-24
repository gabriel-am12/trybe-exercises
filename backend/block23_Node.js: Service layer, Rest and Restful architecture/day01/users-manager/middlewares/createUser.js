const rescue = require('express-rescue');
const UserModel = require('../models/User');
const Joi = require('joi');

//using joi library for data validation
const createUserSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
}).messages({
  'any.required': 'O campo {{: id="label" }} é obrigatório',
  'string.min': 'O campo {{: id="label" }} deve ter, pelo menos, {{: id="limit" }} caracteres',
  'string.email': 'Informe um email válido no campo {{: id="label" }}',
});

module.exports = [
  (req, res, next) => {
    //Joi will validate the req body
    const { error } = createUserSchema.validate(req.body);
    
    if (error) return next(error);
    next();
  },
  rescue(async (req, res, next) => {
    const { firstName, lastName, email, password } = req.body;

    if(!UserModel.isValid({ firstName, lastName, email, password})) {
      const erro = new Error('Invalid data');
      erro.status = 400;

      return next(erro);
    }
    const newUser = await UserModel.create({ firstName, lastName, email, password });
    res.status(201).json(newUser);
  }),
]