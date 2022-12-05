require("dotenv")
const mongoose = require('mongoose')
const { MONGO_URI } = process.env

module.exports = () => {
  function connect() {
    mongoose.connect(MONGO_URI, e => {
      if (e) console.error("mongodb connnection Error", e)
      else console.log("mongodb is cconnected!!")
    })
  }
  connect()
  mongoose.connection.on("disconnected", connect)
  require("./models/User")
}