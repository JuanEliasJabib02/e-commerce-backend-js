const { StatusCodes } = require('http-status-codes')

const onlyAdmin = async (req, res, next) => {
  try {
    const { userActive } = req

    const role = userActive.role

    if (role !== 'admin') {
      res.status(StatusCodes.FORBIDDEN)
        .json({ error: "YOUR_DONT_HAVE_ACCESS" })
      return
    } else {
       next()
    }

   
  } catch (err) {
    next(err)
  }
}

module.exports = { onlyAdmin }
