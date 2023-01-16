const Joi = require("joi")


const productSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(20)
    .required(),
  details: Joi.string()
    .min(3)
    .max(450)
    .required(),
  price: Joi.number()
    .min(1)
    .max(50)
    .required(),
  quantity: Joi.number().integer()
    .min(1)
    .max(500)
    .required(),
  categoryId: Joi.number().integer()
    .min(1)
    .max(5)
    .required()
})


const validateProduct = (req, res, next) => {
  const data = req.body
  const { error } = productSchema.validate(data, { abortEarly: false })

  if (error) { 
    return res.json({ error: error.details })
  }

  next()
}


module.exports = { validateProduct }