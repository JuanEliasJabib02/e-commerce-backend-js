
const { StatusCodes } = require('http-status-codes')
const categoryServices = require('./category.service')

const createCategory = async (req, res, next) => {
  try {
    const data = req.body


    const response = await categoryServices.createCategory(data)

   	const error = response.stack

    if (error) {
      return next(response)
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

    const error = response.stack

    if (error) {
      return next(response)
    }

    res.status(StatusCodes.OK).json(response)
  } catch (error) {
    next(error)
  }
}

const updateCategory = async (req, res, next) => {
  try {
    const data = req.body
    const { id } = req.params
    const response = await categoryServices.updateCategory(id, data)

   	const error = response.stack

    if (error) {
      return next(response)
    }

    res.status(StatusCodes.NO_CONTENT).json(response)
  } catch (error) {
    next(error)
  }
}

const deleteCategory = async (req, res, next) => {
  try {
    const { id } = req.params

    const response = await categoryServices.deleteCategory(id)

    const error = response.stack

    if (error) {
      return next(response)
    }

    res.status(StatusCodes.NO_CONTENT).json(response)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory
}
