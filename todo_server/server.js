const express = require("express")
const path = require('path')
const app = express()
const db = require("./db")
const user = require("./routes/users")

app.set("view engine", "pug")
app.set("views", path.join(__dirname, "html"))
db()

app.use(express.static(path.join(__dirname, "html")))
app.use(express.json())

app.use("/", path.join(__dirname, "html"))
app.use("/user", user)

app.listen(8080, () => console.log("Server is connected!!"))