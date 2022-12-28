
const userService = require('./auth.service');

const signUp = async (req, res, next) => {
	try {

		const data = req.body;
		const response = await userService.signUp(data)
		
		res.status(201).json(response)
		
	} catch (err) {
		next(err);
	}
};

const login = async (req, res, next) => {
	try {
		const response = loginUser()

	} catch (err) {
		next(err);
	}
};

module.exports = { signUp, login };
