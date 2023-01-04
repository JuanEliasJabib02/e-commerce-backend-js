const express = require('express')
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
} = require('./product.controller')

// Controllers

// Middlewares
const { checkToken } = require('../../middlewares/checkToken')
const { onlyAdmin } = require('../../middlewares/onlyAdmin')
const { uploadFile, multerErrorHandler, multerFileTypeErrorHandler } = require('../../utils/uploadFile')

const productRouter = express.Router()

productRouter.post('/',
  checkToken,
  onlyAdmin,
  uploadFile.array('productImg', 4),
  multerErrorHandler,
  createProduct
)

productRouter.get('/', getAllProducts)

productRouter.get('/:id', getProductById)

productRouter.patch('/:id',
  checkToken,
  onlyAdmin,
  updateProduct
)

productRouter.delete('/:id',
  checkToken,
  onlyAdmin,
  deleteProduct
)

module.exports = { productRouter }
