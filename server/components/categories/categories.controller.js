const { handleHttpError } = require("../../utils/handleHttpError");
const { Categories } = require("./categories.model");

const getCategories = async (req, res, next) => {
  try {
    console.log("get categories")
  } catch (err) {

    next(err)
  }

}

const addCategory = async (req, res, next) => {
  try {
    
    const { name } = req.body;

    const category = await Categories.findOne({
      where: {
        name
      }
    })

    if (category) {
      handleHttpError(res, "CATEGORY_ALREADY_EXIST", 400);
    }

    const newCategory = await Categories.create({
      name,
    })
    
    console.log(newCategory)

    res.status(201).json({
      newCategory
    })

  } catch (err) {

    next(err)
  }

}


const updateCategoryName = async (req, res, next) => {
  try {
    
  } catch (err) {
    
    next(err)
  }

}

const deleteCategory = async (req, res, next) => {
  try {
    
  } catch (err) {
    
    next(err)
  }

}

module.exports = { addCategory, updateCategoryName, deleteCategory };