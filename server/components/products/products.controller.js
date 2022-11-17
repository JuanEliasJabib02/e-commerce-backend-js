

const addProduct = async (req, res, next) => {
  
  try {
    console.log("here in add product")
  } catch (err) {
    next(err);
  }
}



module.exports = { addProduct };
