const { StatusCodes } = require("http-status-codes")
const multer = require("multer")

const MAX_IMAGE_SIZE = 5000000 //5MB


const multerErrorHandler = (err, req, res, next) => {
  try {
    if (err.message === "ONLY_PNG_ALLOWED") {
      return res.status(StatusCodes.NOT_ACCEPTABLE).json({error: "NOT_ACCEPTABLE"})
    }
    if (err && err.field === "productImg") {
      return res.status(StatusCodes.REQUEST_TOO_LONG)
        .json({error:"Img is to big,only 5mb allowed"})
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
    return cb(new Error("ONLY_PNG_ALLOWED",500))
  }
  
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
   const pathStorage = `${__dirname}/../public`
    cb(null,pathStorage)
  },
  filename: function (req, file, cb) {
    const ext = file.originalname.split(".").pop()
    console.log(ext)
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
