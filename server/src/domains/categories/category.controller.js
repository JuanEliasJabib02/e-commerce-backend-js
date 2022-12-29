
const { StatusCodes } = require("http-status-codes")
const categoryServices = require("./category.service")

const createCategory = async (req, res, next) => {
  try {

    const data = req.body
    
    const response = await categoryServices.createCategory(data)

  
  } catch (err) { 
    next(err)
  }
}


module.exports = {createCategory}