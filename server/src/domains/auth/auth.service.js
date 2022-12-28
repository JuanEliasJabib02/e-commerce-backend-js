const { User } = require('../users/user.model');
const { encrypt, compare } = require('../../utils/handlePassword')
const { Email } = require('../../services/email/email.service');
const { handleHttpError } = require('../../utils/handleHttpError');
const jwt = require('jsonwebtoken');

const signUp = async (data) => {

  	const { firstName, lastName, email, password } = data;

		const hashPassword = await encrypt(password);

		const user = await User.create({
			firstName,
			lastName,
			email,
			password: hashPassword,
		});

		user.password = undefined;

		new Email(email).sendWelcome(firstName);
    
    return user

}

const loginUser = async (req) => {

  const { email, password } = req.body;

		const user = await User.findOne({
			where: {
				email,
				status: 'active',
			},
		});

		if (!user) {
			return handleHttpError(res, 'USER_AND_PASSWORD_FAIL', 404);
		}

		const passOkay = await compare(password, user.password);

		if (!passOkay) {
			return handleHttpError(res, 'USER_AND_PASSWORD_FAIL', 404);
		}

		const token = jwt.sign({ id: user.id }, process.env.JWT_SIGN, {
			expiresIn: '1d',
		});

		user.password = undefined;

		res.status(200).json({
			data: {
				token,
				user,
			},
		});
}



module.exports = { signUp,loginUser }
