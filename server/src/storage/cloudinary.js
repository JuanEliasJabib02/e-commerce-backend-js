const cloudinary = require("cloudinary").v2

const fs = require("fs")

const dotenv = require('dotenv');
const { AppError } = require("../utils/appError");

dotenv.config({ path: './config.env' })



cloudinary.config({ 
  cloud_name: "dzmywspke", 
  api_key: "416653822791848", 
  api_secret: "-zF4lnBcBZJT6ctGIdjg0cO1peM" 
});



const uploadToCloudinary = async (img) => {
  try {
    const imgPath = img.path
    const randomNumber = Date.now() - Math.round(Math.random() * 1E9)
    const public_id = `file-${randomNumber}`
    const folder = "hideshi/images"
        
    const imgUrl = await cloudinary.uploader.upload(imgPath, {
      public_id,
      resource_type: "image",
      folder
    })
      .then(img => {
        fs.unlinkSync(imgPath);
        return img.url
      })
    .catch(err => {return new AppError(err)})
    
    return imgUrl
    
  
  } catch (error) {
    return new AppError(error)
  }
  
 
          

 
}


module.exports = {uploadToCloudinary}