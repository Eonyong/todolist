const mongoose = require('mongoose')

module.exports = () => {
  function connect() {
    mongoose.connect('mongodb+srv://root:1234@testdb.4sdkjek.mongodb.net/?retryWrites=true&w=majority', e => {
      if (e) console.error("mongodb connnection Error", e)
      else console.log("mongodb is cconnected!!")
    })
  }
  connect()
  mongoose.connection.on("disconnected", connect)
  require("./models/User")
}