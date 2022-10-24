


const signUp = async (req, res, next) => {
  
  try {

  } catch (err) {
    next(err)
  }

};

const login = async (req, res, next) => {
  
  try {
    console.log("login working")
  } catch (err) {
    next(err)
  }

};

module.exports = {signUp, login}