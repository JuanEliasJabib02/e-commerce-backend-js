const { productImg } = require("../model/productImg.model")



const createProductImg = async (imgUrl, productId) => {
     await productImg.create({
     imgUrl,
     productId
     })
}
  

module.exports = {createProductImg}