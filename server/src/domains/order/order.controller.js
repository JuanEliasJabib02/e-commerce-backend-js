
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


    const response = await orderServices.createOrder(req)


    console.log("llego la respuesta")
    res.status(201)
   
    
  } catch (error) {
    console.log(error)
  }
}



module.exports = {
  getOrders,
  createOrder
}