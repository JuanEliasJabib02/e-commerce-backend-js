
const { StatusCodes } = require('http-status-codes')
const { uploadToCloudinary } = require('../../storage/cloudinary')
const { AppError } = require('../../utils/appError')
const { Product } = require('./model/product.model')
const { productImg } = require('./model/productImg.model')
const { createProductImg } = require('./middleware/createProductImg')

const createProduct = async (data, imgs) => {

  const { name, details, categoryId, price, quantity } = data

  const productExist = await Product.findOne({
    where: {
      name,
      status: 'available'
    }
  })

  if (productExist) {
    return new AppError(
      'PRODUCT_ALREADY_EXIST',
      StatusCodes.BAD_REQUEST,
      true
    )
  }

  const product = await Product.create({
    name,
    details,
    categoryId,
    price,
    quantity
  })

  console.log(imgs)


  if (imgs.length > 0) {
    try {
      await imgs.map(async img => {
      const imgUrl = await uploadToCloudinary(img)
      createProductImg(imgUrl, product.id)
    })
    } catch (error) {
      consonple.log(error)
      console.log("here is the error")
    }

  }

  return product
}


const getAllProducts = async () => {
  const products = await Product.findAll({
    where: {
      status: 'available'
    },
    include: [
      {
        model: productImg,
        attributes: ['imgUrl']

      }
    ]
  })

  return products
}

const getProductById = async (id) => {
  const product = await Product.findOne({
    where: {
      status: 'available',
      id
    },
    include: [
      {
        model: productImg,
        attributes: ['imgUrl']

      }
    ]
  })

  if (!product) {
    return new AppError(
      'PRODUCT_NOT_FOUND',
      StatusCodes.NOT_FOUND,
      true
    )
  }

  return product
}

const updateProduct = async (id, data) => {
  // MIDDLEWARE REFACT LATER

  const { name, details, price } = data

  const product = await Product.findOne({
    where: {
      status: 'available',
      id
    }
  })

  if (!product) {
    return new AppError(
      'PRODUCT_NOT_FOUND',
      StatusCodes.NOT_FOUND,
      true
    )
  }

  await product.update({ name, details, price })

  return true
}

const deleteProduct = async (id) => {
  const product = await Product.findOne({
    where: {
      status: 'available',
      id
    }
  })

  if (!product) {
    return new AppError(
      'PRODUCT_NOT_FOUND',
      StatusCodes.NOT_FOUND,
      true
    )
  }

   await product.update({ status: 'delete' })

  return true 
}
module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
}
