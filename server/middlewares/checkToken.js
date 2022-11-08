const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const { Users } = require("../components/users/user.model");
dotenv.config({ path: "./config.env" })
const { handleHttpError } = require("../utils/handleHttpError")

const checkToken = async (req, res, next) => {

  try {
    
    if (!req.headers.authorization) {
      handleHttpError(res, "NOT_TOKEN", 401);
    }

    const token = req.headers.authorization.split(" ").pop();

    const decoded = await jwt.verify(
      token,
      process.env.JWT_SIGN
    )

    const userActive = await Users.findOne({
      where: {
        id: decoded.id,
        status: "active"
      }
    })

    if (!userActive) {
      handleHttpError(res,"USER_NOT_EXIST",403)
    }
    
    req.userActive = userActive;



    next();
  
  } catch (err) {
    next(err)
  }

  
  
}

module.exports = { checkToken };