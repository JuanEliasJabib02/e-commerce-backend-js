
const userService = require('./auth.service')
const {  StatusCodes } = require("http-status-codes")

const signUp = async (req, res, next) => {
  try {
    const data = req.body
    const response = await userService.signUp(data)

    if (response === 'USER_ALREADY_EXIST') {
			res.status(StatusCodes.BAD_REQUEST).json({ error: response })
			return
		} 

		res.status(StatusCodes.CREATED).json(response)
			
  } catch (err) {
    next(err)
  }
}

const login = async (req, res, next) => {
	try {
		const data = req.body
		const response = await userService.login(data)

		if (response === "USER_AND_PASSWORD_FAIL") {
			res.status(StatusCodes.UNAUTHORIZED).json({error:response})
		} else {
			res.status(StatusCodes.OK).json(response)
		}
		
  } catch (err) {
    next(err)
  }
}

module.exports = { signUp, login }
