const { productImg } = require('../model/productImg.model')

const createProductImg = async (imgUrl, productId) => {
  console.log(imgUrl)
  await productImg.create({
    imgUrl,
    productId
  })
}

module.exports = { createProductImg }
