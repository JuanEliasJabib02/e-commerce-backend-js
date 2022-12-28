const { DataTypes } = require('sequelize')
const { db } = require('../../../config/postgres')

const User = db.define('users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true
  },
  firstName: {
    type: DataTypes.STRING(16),
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING(16),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true

  },
  password: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  role: {
    type: DataTypes.ENUM([
      'client',
      'admin'
    ]),
    defaultValue: 'client'
  },
  status: {
    type: DataTypes.ENUM([
      'active',
      'disable'
    ]),
    defaultValue: 'active'
  }
})

module.exports = { User }
