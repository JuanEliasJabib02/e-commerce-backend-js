const { StatusCodes } = require("http-status-codes");
const { AppError } = require("../../utils/appError");
const { Order } = require("./order.model")


const createOrder = async (orderData, paymentId) => {
  try {
    const { name, surname, email, address, city, departament, phone } = orderData;
    
    console.log("e aqui")

    const order = await Order.create({
      name,
      last_name: surname,
      email,
      address,
      city,
      departament,
      phone,
      paymentId
    })
    
    console.log(order)
    return order
    
  } catch (error) {
    console.log(error)
  }
  
 

}

const getOrders = async () => {

  console.log("we are here")

}


module.exports = { createOrder,getOrders }