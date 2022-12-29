const { DataTypes } = require("sequelize");
const { db } = require("../../../config/postgres");


const Category = db.define("categories", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique:true,
  },
  name: {
    type: DataTypes.STRING(16),
    allowNull:false 
  },
  status: {
    type: DataTypes.ENUM([
      "active",
      "deleted"
    ]),
    defaultValue:"active"
  }
})

module.exports = { Category }
