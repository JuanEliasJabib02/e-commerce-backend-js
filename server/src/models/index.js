
const { Category } = require('../domains/categories/category.model')
const { User } = require('../domains/users/user.model')

const { Product } = require('../domains/products/model/product.model')
const { productImg } = require('../domains/products/model/productImg.model')

const Models = {
  User,
  Category,
  Product,
  Product,
  productImg

}

module.exports = { Models }
