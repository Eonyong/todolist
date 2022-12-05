const mongoose = require('mongoose')

module.exports = () => {
  function connect() {
    mongoose.connect('mongodb://root:1234@localhost:27017/test', e => {
      if (e) console.error("mongodb connnection Error", e)
      else console.log("mongodb is cconnected!!")
    })
  }

  connect()
  mongoose.connection.on("disconnected", connect)
  require("./User")
}