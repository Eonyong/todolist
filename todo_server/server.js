require("dotenv").config()
const express = require("express")
const path = require('path')
const bodyparser = require("body-parser")
const mongoose = require("mongoose")
const cors = require("cors")
const db = require("./db")
const user = require("./routes/users")

const app = express()

const { PORT } = process.env

app.set("view engine", "pug")
app.set("views", path.join(__dirname, "../todo/build/index.html"))
db()

app.use(express.static(path.join(__dirname, "../todo/build")))
app.use(cors())
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
// url에 /user 를 붙이고 그다음에 routes에 있는 url 추가 작성
app.use("/user", user)

mongoose.Promise = global.Promise;


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../todo/build/index.html"))
})

app.listen(PORT, () => console.log("Server is connected!!"))

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../todo/build/index.html"))
})