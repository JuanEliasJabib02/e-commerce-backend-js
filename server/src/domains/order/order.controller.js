
const orderServices = require("./order.service")

const getOrders = async (req,res,next) => {
  try {
    
    const response = await orderServices.getOrders()

    res.status(200).json(response)

  } catch (error) {
    console.log(error)
  }

  
}



module.exports = {
  getOrders
}