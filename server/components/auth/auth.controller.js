



//NPM
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" })
//Models
const { Users } = require("../users/user.model");
//Utils
const { encrypt, compare } = require("../../utils/handlePassword");
const { handleHttpError } = require("../../utils/handleHttpError");
const { Email } = require("../../services/email/email.service");



const signUp = async (req, res, next) => {
  try {

    const { firstName, lastName, email, password } = req.body;

    const user = await Users.findOne({
      where: {
        email,
      }
    });

    if (user) {
      return handleHttpError(res, "EMAIL_ALREADY_EXIST", 400);
    }

    const hashPassword = await encrypt(password);
    
    const newUser = await Users.create({
      firstName,
      lastName,
      email,
      password: hashPassword
    })

    newUser.password = undefined;

    // Email Welcome

    new Email(email).sendWelcome(firstName);
    
    res.status(201).json({
      status: "sucess",
      newUser
    });
  } catch (err) {
    next(err)
  }

};

const login = async (req, res, next) => {
  
  try {
    const { email, password } = req.body;

    const user = await Users.findOne({
      where: {
        email,
        status: "active"
      }
    });

    if (!user) {
      return handleHttpError(res, "USER_AND_PASSWORD_FAIL", 400);
    }

    const passOkay = await compare(password, user.password) 
    
    if (!passOkay) {
      return handleHttpError(res,"USER_AND_PASSWORD_FAIL",400)
    }

    const token = jwt.sign(
      { id: user.id },
      process.env.JWT_SIGN,
      {expiresIn:"1d"}
    )

    res.status(200).json({
      token
    })
 
  } catch (err) {
    next(err);
  }

};

module.exports = {signUp, login}