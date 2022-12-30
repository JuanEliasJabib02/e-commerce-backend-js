const productServices = require("./product.services")

const { StatusCodes } = require("http-status-codes")

const createProduct = async (req, res, next) => {
  try {

    const data = req.body
    const imgs = req.files

    const response = await productServices.createProduct(data,imgs);
  
    /* cost response =  */
  } catch (error) {
    next(error)
  }
}



module.exports = { createProduct }