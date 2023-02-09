const { DataTypes } = require("sequelize")
const { db } = require("../../../config/postgres")

const Order = db.define('orders', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull:null
  },
  last_name: {
    type: DataTypes.STRING(50),
    allowNull:null
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true
  },
  cart: {
    type: DataTypes.ARRAY(DataTypes.JSONB),
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
  paymentId:{
    type: DataTypes.INTEGER,
    allowNull:false
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
