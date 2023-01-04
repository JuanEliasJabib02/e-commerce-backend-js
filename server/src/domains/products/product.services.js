
const { uploadToCloudinary } = require("../../storage/cloudinary")
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
    return "PRODUCT_ALREADY_EXIST"
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