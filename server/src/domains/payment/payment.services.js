
const mercadopago = require("mercadopago");
const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })

mercadopago.configure({access_token:process.env.MERCADOPAGO_ACCCES_TOKEN})

const createPayment = async (req, res, next) => {

  console.log(req.body)

  const { title, description, picture_url, quantity, unit_price } = req.body;


  /* Products id 
    find products
    take data nedeed
    create the order
   */
  
    /* Pay configuration */
  const preference = {
    binarymode_mode: true, /* Dont access pendings */
    items: [
      {
        title,
        description,
        picture_url,
        quantity,
        currency_id:"CO",
        unit_price,
      }
    ],
    payer: {
      name: "comprador",
      surname: "elapellido",
      email: "testing@gmail.com",
    },
    back_urls: {
      success: "https://hideshi.netlify.app/",
      failure: "",
      pending:""
    },
    auto_return:"approved"
  }

  try {
    const doPayment = await mercadopago.preferences.create(preference)
    console.log(doPayment)
  } catch (error) {
    console.log(error)
  }

  
  


}



module.exports = {
  createPayment
}