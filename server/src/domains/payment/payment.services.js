
const mercadopago = require("mercadopago");
const dotenv = require('dotenv');

//Middlewares
const { createOrder } = require("../order/order.service");
const { AppError } = require("../../utils/appError");
const { Order } = require("../order/order.model");
dotenv.config({ path: './config.env' })

mercadopago.configure({access_token:process.env.MERCADOPAGO_ACCCES_TOKEN})

const createPayment = async (orderData, cart) => {
  try {
    const productsForMercadoPago = cart?.map(product => {
      const item = {
        title: product.title,
        description: product.description,
        picture_url: product.picture_url,
        quantity: product.quantity,
        currency_id: "CO",
        unit_price:product.unit_price
      }
      return item
    })

    const preference = {
    binarymode_mode: true, /* Dont access pendings */
    items: productsForMercadoPago,
    payer: {
      name: orderData.name,
      surname: orderData.surname,
      email: orderData.email,
    },
    back_urls: {
      success: "https://hideshi.netlify.app/",
      failure: "",
      pending:""
    },
    auto_return: "approved",
    notification_url:"https://5564-181-32-131-219.ngrok.io/api/v1/order"
  }
    const payment = await mercadopago.preferences.create(preference)

    /* Create the order */
    const paymentId = payment.body.id

    const order = await createOrder( orderData, paymentId)

  /*   console.log(payment) */

    return payment
    
  } catch (error) {
    new AppError(error)

  }

}



module.exports = {
  createPayment
}