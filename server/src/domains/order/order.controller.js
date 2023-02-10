
const orderServices = require("./order.service")

const getOrders = async (req,res,next) => {
  try {
    
    const response = await orderServices.getOrders()

    res.status(201).json(response)

  } catch (error) {
    console.log(error)
  }

  
}

const createOrder = async (req, res, next) => {
  try {

    const data = req?.body;
    const id = await data?.data?.id
    
    const response = await orderServices.createOrder(data,id)

    res.status(201).json(response)
   
    
  } catch (error) {
    console.log(error)
  }
}



module.exports = {
  getOrders,
  createOrder
}