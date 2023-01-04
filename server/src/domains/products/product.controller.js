const productServices = require('./product.services')

const { StatusCodes } = require('http-status-codes')

const createProduct = async (req, res, next) => {
  try {
    /* Validate that if no req.files are so trow error */
    const data = req.body
    const imgs = req.files

    const response = await productServices.createProduct(data, imgs)

   	const error = response.stack

    if (error) {
      return next(response)
    }

    res.status(StatusCodes.CREATED).json(response)

    /* cost response =  */
  } catch (error) {
    next(error)
  }
}

const getAllProducts = async (req, res, next) => {
  try {
    const response = await productServices.getAllProducts()

    res.status(StatusCodes.OK).json(response)
  } catch (error) {
    next(error)
  }
}

const getProductById = async (req, res, next) => {
  try {

    const { id } = req.params

    const response = await productServices.getProductById(id)

   	const error = response.stack

    if (error) {
      return next(response)
    }

    res.status(StatusCodes.OK).json(response)
    
  } catch (error) {
    next(error)
  }
}

const updateProduct = async (req, res, next) => {
  
    const { id } = req.params
    const data = req.body
    const response = await productServices.updateProduct(id, data)
  
    const error = response.stack

    if (error) {
      return next(response)
    }

    res.status(StatusCodes.NO_CONTENT).json(response)
  

}

const deleteProduct = async (req, res, next) => {
  try {

    const { id } = req.params

    const response = await productServices.deleteProduct(id)
  
    const error = response.stack

    if (error) {
      return next(response)
    }

    res.status(StatusCodes.NO_CONTENT).json(response)
  
    
  } catch (error) {
    next(error)
  }
    
    
}

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
}
