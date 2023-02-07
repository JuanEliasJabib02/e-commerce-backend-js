const cloudinary = require('cloudinary').v2
const fs = require('fs').promises;

const {unlink} = fs


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

    const { url } = await cloudinary.uploader.upload(imgPath, {
      public_id,
      resource_type: 'image',
      folder
    })

    await unlink(imgPath)  

    return url

    

  } catch (error) {
    return new AppError(error)
  }
}

module.exports = { uploadToCloudinary }
