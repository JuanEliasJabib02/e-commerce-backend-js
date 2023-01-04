const { DataTypes } = require('sequelize')
const { db } = require('../../../../config/postgres')

const productImg = db.define('productImgs', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true
  },
  imgUrl: {
    type: DataTypes.STRING,
    allowNull: false
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false

  }
})

module.exports = { productImg }
