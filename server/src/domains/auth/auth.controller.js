
const { AppError } = require('../../utils/appError')
const userService = require('./auth.service')
const {  StatusCodes } = require("http-status-codes")

const signUp = async (req, res, next) => {
  try {
    const data = req.body
		const response = await userService.signUp(data)
		const error = response.stack
		if (error) {
			return next(response)
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
		const error = response.stack

		if (error) {
			return next(response)
		} 
		res.status(StatusCodes.OK).json(response)
		
		
  } catch (err) {
    next(err)
  }
}

module.exports = { signUp, login }
