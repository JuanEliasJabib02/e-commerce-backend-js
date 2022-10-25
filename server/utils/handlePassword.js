const bcrypt = require("bcryptjs");

const encrypt = async (password) => {

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  return hash;
} 

const compare = async (clientpassword, userpassword) => {
  
  const password = await bcrypt.compare(clientpassword, userpassword)
  
  return password;
}


module.exports = { encrypt, compare }