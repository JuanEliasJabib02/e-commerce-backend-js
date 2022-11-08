const { Categories } = require("../components/categories/categories.model");
const { Users } = require("../components/users/user.model");


const Models = {

  users: Users,
  categories: Categories
}


module.exports = { Models }