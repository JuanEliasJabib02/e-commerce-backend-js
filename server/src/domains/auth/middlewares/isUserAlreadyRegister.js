const { handleHttpError } = require("../../../utils/handleHttpError");
const { User } = require("../../users/user.model");

  
    const isUserAlreadyRegister = async (req,res,next) => {
      try {
          const { email } = req.body;

          const userExist = await User.findOne({
            where: {
              email,
            },
          });

          if (userExist) {
            return handleHttpError(res, 'EMAIL_ALREADY_EXIST', 400);
          } else {
            next()
          }
      } catch (error) {
        next(error)
      }
}
    
module.exports = {isUserAlreadyRegister}