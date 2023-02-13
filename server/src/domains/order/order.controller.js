
const orderServices = require("./order.service")

const getOrders = async (req,res,next) => {
  try {
    
    const response = await orderServices.getOrders()

    const error = response.stack
    if (error) {
      return next(response)
    }

    res.status(201).json(response)

  } catch (error) {
    next(error)
  }

  
}

const createOrder = async (req, res, next) => {
  try {

    const data = req?.body;
    const id = await data?.data?.id
    
    const response = await orderServices.createOrder(data, id)
    
    const error = response.stack
    if (error) {
      return next(response)
    }

    res.status(201).json(response)
   
    
  } catch (error) {
    next(error)
  }
}


const getOrderById = (id) => {
  try {
    
  } catch (error) {
    next(error)
  }
}
  


module.exports = {
  getOrders,
  createOrder
}