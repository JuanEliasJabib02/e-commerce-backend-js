const { handleHttpError } = require("../../../utils/handleHttpError");
const { Categories } = require("../categories.model");


const findCategory = async (req, res, next) => {

  try {

    const { id } = req.params;

    const category = await Categories.findOne({
      where: {
        id,
        status:"active"
      }
    })

    console.log(category)
    
    if (!category) {
      handleHttpError(res, "CATEGORY_NOT_FOUND", 404);
    }
    req.category = category;
    
    next();
  } catch (error) {
    next(error)
  }

  
  
}

module.exports = { findCategory };