const express = require("express")
const path = require('path')
const app = express()
const db = require("./db")
const user = require("./routes/users")
const { PORT } = process.env

app.set("view engine", "pug")
app.set("views", path.join(__dirname, "../todo/build/index.html"))
db()

app.use(express.static(path.join(__dirname, "../todo/build")))
app.use(express.json())

app.use("/user", user)

app.listen(PORT, () => console.log("Server is connected!!"))