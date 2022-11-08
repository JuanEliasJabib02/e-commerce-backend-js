
const getCategories = async (req, res, next) => {
  try {
    console.log("get categories")
  } catch (err) {

    next(err)
  }

}

const addCategory = async (req, res, next) => {
  try {
    console.log("add-category")
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