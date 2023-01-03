const { StatusCodes } = require("http-status-codes")
const multer = require("multer")

const MAX_IMAGE_SIZE = 5000000 //5MB


const multerLimitSizeErrorHandler = (err, req, res, next) => {

  try {
    if (err && err.field === "productImg") {
      return res.status(StatusCodes.REQUEST_TOO_LONG)
        .json({error:"Img is to big,only 5mb allowed"})
    }
    next()
  } catch (error) {
    next(error)
  }
}

const checkFileType = async (file, cb) => {

}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
   const pathStorage = `${__dirname}/../public`
    cb(null,pathStorage)
  },
  filename: function (req, file, cb) {
    console.log(file)
    const ext = file.originalname.split(".").pop()
    console.log(ext)
    const filename = `file-${Date.now()}.${ext}`
    cb(null,filename)
  },
})


const uploadFile = multer({
  storage,
  limits:{fileSize:MAX_IMAGE_SIZE}
})

module.exports = { uploadFile ,multerLimitSizeErrorHandler}
