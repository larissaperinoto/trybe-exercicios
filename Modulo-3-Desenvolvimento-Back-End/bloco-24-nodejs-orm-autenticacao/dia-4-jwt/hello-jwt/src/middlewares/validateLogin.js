const Joi = require('joi');

const validateLogin = (body) =>
  Joi.object({
    username: Joi.string().min(5).required().message({
      'string.min': 'O nome de usuário deve possuir ao menos 5 caracteres',
      'string.required': 'O nome de usuário é obrigatório',
    }),
    password: Joi.string().min(5).required().messages({
      'string.min': 'O senha deve possuir ao menos 5 caracteres',
      'string.required': 'O senha é obrigatória',
    }),
  }).validate(body);


module.exports = validateLogin;