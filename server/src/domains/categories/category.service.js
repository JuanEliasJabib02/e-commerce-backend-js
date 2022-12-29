
const { Category } = require("./category.model")

const createCategory = async (data) => {

  const {name} = data
  
  	const categoryExist = await Category.findOne({
			where: {
				name,
			},
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

  const category = await Category.findOne({
    where: {
      status: "active",
      id
    }
  })

  if (!category) {
    return "CATEGORY_DONT_EXIST"
  }

  return category
  
}

module.exports = {createCategory, getAllCategories, getCategoryById}