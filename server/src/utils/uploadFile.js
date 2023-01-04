const { StatusCodes } = require("http-status-codes")
const multer = require("multer")
const { AppError } = require("./appError")

const MAX_IMAGE_SIZE = 5000000 //5MB


const multerErrorHandler = (err, req, res, next) => {
  try {
    if (err && err.message === "ONLY_PNG_ALLOWED") {
      return next(new AppError(
        "ONLY_PNG_ALLOWED",
        StatusCodes.NOT_ACCEPTABLE,
        true
      ))
    }
    if (err && err.field === "productImg") {
      return next(new AppError(
        "ONLY_5MB_ALLOWED-IMG-TO-BIG",
        StatusCodes.REQUEST_TOO_LONG,
        true
      ))
    }
    next()
  } catch (error) {
    next(error)
  }
}


const checkFileType = (req, file, cb) => {
  
  if (file.mimetype === "image/png") {
    cb(null,true)
  }
  else {
    return cb(new AppError(
      "ONLY_PNG_ALLOWED",
      StatusCodes.BAD_REQUEST,
      true
    ))
  }
  
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
   const pathStorage = `${__dirname}/../public`
    cb(null,pathStorage)
  },
  filename: function (req, file, cb) {
    const ext = file.originalname.split(".").pop()
    const filename = `file-${Date.now()}.${ext}`
    cb(null,filename)
  },
})


const uploadFile = multer({
  storage,
  limits: { fileSize: MAX_IMAGE_SIZE },
  fileFilter: (req,file,cb) => {
    checkFileType(req,file,cb)
  }
  
})

module.exports = { uploadFile ,multerErrorHandler}
