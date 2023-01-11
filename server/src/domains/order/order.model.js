const { DataTypes } = require("sequelize")
const { db } = require("../../../config/postgres")

const Order = db.define('orders', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true
  },
  productsInCart: {
    type: DataTypes.JSON,
    allowNull:false,
  },
  totalPrice: {
    type: DataTypes.FLOAT,
    allowNull:false,
  },
  departament: {
    type: DataTypes.STRING,
    allowNull:false
  },
  city: {
    type: DataTypes.STRING,
    allowNull:false
  },
  address: {
    type: DataTypes.STRING,
    allowNull:false
  },
  phone: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM([
      "pending",
      "shipped",
      "completed"
    ]),
    defaultValue: "pending"
  }
})

module.exports = { Order }
