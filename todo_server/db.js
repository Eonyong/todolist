require("dotenv").config()
const mongoose = require('mongoose')
const { MONGO_URI } = process.env

module.exports = () => {
  function connect() {
    mongoose.connect(MONGO_URI, (err) => {
      if (!err) console.log("mongodb is connected!!")
      else console.error(err)
    })
  }
  connect()
  mongoose.connection.on("error", () => console.error("Connection Failed"))
  mongoose.connection.once("open", () => console.error("Connection Success!!"))
  require("./models/User")
}