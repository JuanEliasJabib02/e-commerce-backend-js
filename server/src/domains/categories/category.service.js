
const { StatusCodes } = require("http-status-codes");
const { AppError } = require("../../utils/appError");
const { Category } = require("./category.model");
const { Product } = require("../products/model/product.model");

const createCategory = async (data) => {

  const {name} = data
  
  	const categoryExist = await Category.findOne({
			where: {
        name,
        status:"active"
        
      },
      /* INCLUDE PRODUCTS */
		});

		if (categoryExist) {
      return new AppError(
        'CATEGORY_ALREADY_EXIST',
        StatusCodes.BAD_REQUEST,
        true
      )
		}

		const category = await Category.create({
			name,
    }); 
  
    return category
}

const getAllCategories = async () => {
  

  const categories = await Category.findAll({
    where: {
      status:"active"
    },
        include: [
      {
        model:Product
      }
    ]
  })

  

  return categories
}

const getCategoryById = async (id) => {
  
  const category = await Category.findOne({
    where: {
      status: "active",
      id
    },
    include: [
      {
        model:Product
      }
    ]
     
  })

  if (!category) {
    return new AppError(
      "CATEGORY_DONT_EXIST",
      StatusCodes.NOT_FOUND,
      true,
    )
  }

  return category
  
}

const updateCategory = async (id, data) => {
  
    const { name } = data

    //REFACT IN A MIDDLEWARE LATER
    const category = await Category.findOne({
    where: {
      status: "active",
      id
    }
    })

  if (!category) {
    return new AppError(
      "CATEGORY_DONT_EXIST",
      StatusCodes.NOT_FOUND,
      true,
    )
  }

  await category.update({
    name
  })

  return true
  
}

const deleteCategory = async (id) => {

   //REFACT IN A MIDDLEWARE LATER
    const category = await Category.findOne({
    where: {
      status: "active",
      id
    }
    })

  if (!category) {
    return new AppError(
      "CATEGORY_DONT_EXIST",
      StatusCodes.NOT_FOUND,
      true,
    )
  }

  await category.update({
    status:"deleted"
  })

  return true

}

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory
}