
const { Category } = require("./category.model")

const createCategory = async (data) => {

  const {name} = data
  
  	const categoryExist = await Category.findOne({
			where: {
				name,
        
      },
      /* INCLUDE PRODUCTS */
		});

		if (categoryExist) {
			return 'CATEGORY_ALREADY_EXIST'
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
    }
  })

  

  return categories
}

const getCategoryById = async (id) => {

  //REFACT IN A MIDDLEWARE LATER
  const category = await Category.findOne({
    where: {
      status: "active",
      id
    }
     /* INCLUDE PRODUCTS */
  })

  if (!category) {
    return "CATEGORY_DONT_EXIST"
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
    return "CATEGORY_DONT_EXIST"
  }

  await category.update({
    name
  })

  return
  
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
    return "CATEGORY_DONT_EXIST"
  }

  await category.update({
    status:"deleted"
  })

  return

}

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory
}