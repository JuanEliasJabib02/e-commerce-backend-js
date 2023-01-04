const Joi = require('joi')

const categorySchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(20)
    .required()
})

const validateCategory = (req, res, next) => {
  const data = req.body

  const { error } = categorySchema.validate(data, { abortEarly: false })

  if (error) {
    return res.json({ error: error.details })
  }

  next()
}

module.exports = { validateCategory }
