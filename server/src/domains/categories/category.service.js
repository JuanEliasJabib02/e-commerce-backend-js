
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


module.exports = {createCategory, getAllCategories}