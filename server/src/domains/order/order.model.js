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
    type: DataTypes.STRING(25),
    allowNull:null
  },
  last_name: {
    type: DataTypes.STRING(25),
    allowNull:null
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true
  },
  cart: {
    type: DataTypes.ARRAY(DataTypes.JSONB),
    allowNull:true,
  },
  totalPrice: {
    type: DataTypes.FLOAT,
    allowNull:true,
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
    type: DataTypes.STRING(25),
    allowNull: false
  },
  paymentId:{
    type: DataTypes.STRING,
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
