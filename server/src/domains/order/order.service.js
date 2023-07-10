const { StatusCodes } = require("http-status-codes");
const { AppError } = require("../../utils/appError");
const { Order } = require("./order.model");
const mercadopago = require("mercadopago");
mercadopago.configure({access_token:process.env.MERCADOPAGO_ACCCES_TOKEN})



const getOrders = async () => {

  const orders = await Order.findAll({
    where: {
      status:"success"
    }
  })

  return orders

}

const getOrdersById = async (id) => {
  
}


/* This order is for update the status of the order when the pay
is complete in mercadopago */

const createOrder = async (data,id) => {
  try {
    /* name,lastname,email,cart,totalprice,city,address,phone,paymentId,status , totalprice*/
    const payment = await mercadopago.payment.get(id)
    const userData = payment?.body?.additional_info.payer
    const cart = payment?.body?.additional_info.items
    const address = payment?.body?.additional_info.shipments.receiver_address
    const totalPrice = payment?.body?.transaction_details.total_paid_amount
    const status = payment?.body.status
    if (status === "approved") {
      const order = await Order.create({
        name: userData.first_name,
        last_name: userData.last_name,
        email: address.zip_code,  
     /* I used the zip code to send the email,after i gonna refact this */  
        city: address.city_name,
        address: address.street_name,
        cart,
        phone: userData.phone.area_code,
        totalPrice: totalPrice,
        paymentId: id,
        status:"success"
      }) 
      console.log("pago")
      return null
    } {
      return null
    }
  } catch (error) {
    next(error)
  }
  
}

module.exports = { getOrders,createOrder }