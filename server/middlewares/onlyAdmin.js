const { handleHttpError } = require("../utils/handleHttpError");

const onlyAdmin = async (req, res, next) => {
  
  try {
    
    const { userActive } = req;

    const role = userActive.role;

    if (role !== "admin") {
      handleHttpError(res,"NOT_AUTHORIZATION",403)
    }

    next();
  
  } catch (err) {
    next(err)
  }
}

module.exports = {onlyAdmin}