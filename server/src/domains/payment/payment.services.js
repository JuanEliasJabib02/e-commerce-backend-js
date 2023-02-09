
const mercadopago = require("mercadopago");
const dotenv = require('dotenv');

//Middlewares
const { createOrder } = require("../order/order.service");
const { AppError } = require("../../utils/appError");
dotenv.config({ path: './config.env' })

mercadopago.configure({access_token:process.env.MERCADOPAGO_ACCCES_TOKEN})

const createPayment = async (orderData, cart) => {

  try {

    /* create the order */
    const order = await createOrder(orderData)
    
    
  } catch (error) {
    new AppError(error)

  }




  /*  const { title, description, picture_url, quantity, unit_price } = req.body;  */


  /* Pay configuration */
  

  /* Mercadopago things */
  
  

  
  


}



module.exports = {
  createPayment
}