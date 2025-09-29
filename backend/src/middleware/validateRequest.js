const Joi = require('joi');

const signupSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const eventSchema = Joi.object({
  title: Joi.string().trim().min(1).required(),
  date: Joi.date().iso().required(),
  location: Joi.string().trim().min(1).required(),
  description: Joi.string().allow('').optional(),
});

function validateSignup(req, res, next) {
  const { error } = signupSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
}

function validateEvent(req, res, next) {
  const { error } = eventSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
}

module.exports = {
  validateSignup,
  validateEvent,
};
