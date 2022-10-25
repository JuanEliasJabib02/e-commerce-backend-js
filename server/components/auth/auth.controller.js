

const { Users } = require("../users/user.model");
//Utils
const { encrypt } = require("../../utils/handlePassword");
const { handleHttpError } = require("../../utils/handleHttpError");



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
    console.log("login working")
  } catch (err) {
    next(err)
  }

};

module.exports = {signUp, login}