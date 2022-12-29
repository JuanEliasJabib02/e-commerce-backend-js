
const { Category } = require('../domains/categories/category.model')
const { User } = require('../domains/users/user.model')

const Models = {
  User: User,
  Category: Category,
}

module.exports = { Models }
