import Joi from 'joi';

export const userSchema = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required(),
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  address: Joi.object().required(),
  phone: Joi.string().required(),
  website: Joi.string().required(),
  company: Joi.object().required()
});

export const usersArraySchema = Joi.array().items(userSchema);