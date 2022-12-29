
const { StatusCodes } = require("http-status-codes")
const categoryServices = require("./category.service")

const createCategory = async (req, res, next) => {
  try {

    const data = req.body
    
    const response = await categoryServices.createCategory(data)

    if (response === "CATEGORY_ALREADY_EXIST") {
      res.status(StatusCodes.BAD_REQUEST)
        .json({error:response})
      return
    }

    res.status(StatusCodes.CREATED)
      .json(response)

  
  } catch (error) { 
    next(error)
  }
}

const getAllCategories = async (req, res, next) => {
  try { 
    
    const response = await categoryServices.getAllCategories()



    res.status(StatusCodes.OK).json(response)
    
  } catch (error) {
    next(error)
  }
}

const getCategoryById = async (req, res, next) => {
  try {

    const { id } = req.params

    
    const response = await categoryServices.getCategoryById(id)

    if (response === "CATEGORY_DONT_EXIST") {
      res.status(StatusCodes.NOT_FOUND)
        .json({error:response})
      return
    }

    res.status(StatusCodes.OK).json(response)

  } catch (error) {
    next(error)
    
  }
}

const updateCategory = async (req, res, next) => {
  try {

    const data = req.body;
    const { id } = req.params;
    const response = await categoryServices.updateCategory(id,data)

    if (response === "CATEGORY_DONT_EXIST") {
      res.status(StatusCodes.NOT_FOUND)
        .json({error:response})
      return
    }

    res.status(StatusCodes.OK).json(response)
    
    
    
  } catch (error) {
    next(error)
  }
}

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory
}