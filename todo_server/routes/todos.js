const express = require("express")
const router = express.Router()
const User = require("../models/User")

router.get("/", (req, res) => {
  res.render("main")
})

router.post("/", (req, res) => {
  User.create(req.body)
  .then(user => res.send(user))
  .catch(err => res.status(500).send(err))
})

router.put("/todoid/:todoid", (req, res) => {
  User.updateByUserid(req.params.userid)
})

router.get("/about", (req, res) => {
  res.render("about")
})

router.get("/:name", (req, res) => {
  User.find({ name: req.params.name }, (err, user) => {
    res.render("main", { user: "user" })
  })
})

module.exports = router