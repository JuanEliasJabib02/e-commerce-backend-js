const { app } = require("./app");
const { postgresConnect } = require("./config/postgres");





const PORT = process.env.PORT || 4000

const startServer = () => {
  app.listen(PORT, () => {
    console.log("SERVER ON")
  })
  //Connect DB
  postgresConnect();
}
startServer();

