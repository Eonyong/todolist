const express = require("express")
const path = require('path')
const bodyparser = require("body-parser")
const mongoose = require("mongoose")
const db = require("./db")
const user = require("./routes/users")

const app = express()

const { PORT } = process.env

app.set("view engine", "pug")
app.set("views", path.join(__dirname, "../todo/build/index.html"))
db()

app.use(bodyparser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "../todo/build")))
app.use(bodyparser.json())
app.use("/user", user)

mongoose.Promise = global.Promise;


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../todo/build/index"))
})

app.listen(PORT, () => console.log("Server is connected!!"))