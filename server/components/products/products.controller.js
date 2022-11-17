

const addProduct = async (req, res, next) => {
  
  try {
    
    const { name, details, categoryId, price } = req.body;

    

  } catch (err) {
    next(err);
  }
}



module.exports = { addProduct };
