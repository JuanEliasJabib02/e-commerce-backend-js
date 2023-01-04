
const { StatusCodes } = require("http-status-codes")
const { uploadToCloudinary } = require("../../storage/cloudinary")
const { AppError } = require("../../utils/appError")
const { Product } = require("./model/product.model")

const createProduct = async (data, imgs) => { 
  
  const { name, details, categoryId, price, quantity } = data
  

  const productExist = await Product.findOne({
    where: {
      name,
      status:"available"
    }
  })

  if (productExist) {
    return new AppError(
      "PRODUCT_ALREADY_EXIST",
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

  if (imgs.length > 0) {
    imgs.map(async img => {
      const imgUrl = await uploadToCloudinary(img)
      
    })
  }

  return product

}


const getAllProducts = async () => {

  const products = await Product.findAll({
    where: {
      status: "available"
    },
    /* INCLUDE IMGS PRODUCT */
  })


  return products

}

module.exports = { createProduct, getAllProducts }