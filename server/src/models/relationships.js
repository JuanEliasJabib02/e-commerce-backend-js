const { Category } = require("../domains/categories/category.model")
const { Product } = require("../domains/products/model/product.model")
const { productImg } = require("../domains/products/model/productImg.model")

const initRelationships = () => {

  Category.hasMany(Product)
  Product.belongsTo(Category)

  Product.hasMany(productImg)
  productImg.belongsTo(Product)

}

module.exports = { initRelationships }
