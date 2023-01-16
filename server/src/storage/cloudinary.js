const cloudinary = require('cloudinary').v2

const fs = require('fs')

const { AppError } = require('../utils/appError')

const dotenv = require('dotenv')

dotenv.config({ path: './config.env' })

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
})


const uploadToCloudinary = async (img) => {
  try {
    const imgPath = img.path
    const randomNumber = Date.now() - Math.round(Math.random() * 1E9)
    const public_id = `file-${randomNumber}`
    const folder = 'hideshi/images'
    console.log()

    const imgUrl = await cloudinary.uploader.upload(imgPath, {
      public_id,
      resource_type: 'image',
      folder
    })
      .then(async img => {
        fs.unlinkSync(imgPath)
        console.log("we are here")
        console.log(img.url)
        return img.url
      })
      .catch(err => { return new AppError(err) })

    return imgUrl
  } catch (error) {
    return new AppError(error)
  }
}

module.exports = { uploadToCloudinary }
