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
const { uploadFile, multerErrorHandler } = require('../../utils/uploadFile')
const { validateProduct } = require('./middleware/product.validator')

const productRouter = express.Router()

productRouter.post('/',
  checkToken,
  onlyAdmin,
  /* validateProduct, */
  uploadFile.array("productImg",4),
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



// Documentation

/**
 * @openapi
 * /product:
 *    get:
 *        tags:
 *            - products
 *        summary: "get products"
 *        description: "This route is for get all products"
 *        responses:
 *                "200":
 *                    description: success
 *                "400":
 *                    description: fail
 * 
 */

/**
 * @openapi
 * /product/{id}:
 *    get:
 *        tags:
 *            - products
 *        summary: "get product by id"
 *        description: "this route is for get one product by id"
 *        parameters:
 *             - in: path
 *               name: id
 *               required: true
 *               schema:
 *                  type: integer
 *        responses:
 *                "200":
 *                    description: success
 *                "400":
 *                    description: fail
 *                "404":
 *                    description: product not found
 * 
 */



/**
 * @openapi
 * /product/:
 *  post:
 */
