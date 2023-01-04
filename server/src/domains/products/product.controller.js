const productServices = require("./product.services")

const { StatusCodes } = require("http-status-codes")

const createProduct = async (req, res, next) => {
  try {
    /*Validate that if no req.files are so trow error */
    const data = req.body
    const imgs = req.files

    const response = await productServices.createProduct(data, imgs);
    
    if (response === "PRODUCT_ALREADY_EXIST") {
      return res.status(StatusCodes.BAD_REQUEST)
              .json({error:"PRODUCT_ALREADY_EXIST"})
    }

    res.status(StatusCodes.CREATED).json(response)
  
    /* cost response =  */
  } catch (error) {
    next(error)
  }
}

const getAllProducts = async (req, res, next) => {
  try { 
    
    const response = await productServices.getAllProducts()
    
    res.status(StatusCodes.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

module.exports = { createProduct,getAllProducts }