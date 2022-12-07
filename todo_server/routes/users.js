const express = require("express")
const router = express.Router()
const User = require("../models/User")


router.post("/register", (req, res) => {
  console.log(req.body)
  const user = new User(req.body)

  user.save((err, userInfo) => {
    if (err) return res.json({ err })
    else return res.status(200).json({ success: true, userInfo })
  })

})

router.get("/userid/:userid", (req, res) => {
  User.findOneByUserid(req.params.userid)
  .then(user => {
    if (!user) return res.status(404).send({ err: "User not found" })
    res.send(`findOne successfully: ${user}`)
  })
  .catch(err => res.status(500).send(err))
})

router.put("/userid/:userid", (req, res) => {
  User.updateByUserid(req.params.userid, req.body)
  .then(user => res.send(user))
  .catch(err => res.send(500).send(err))
})

router.delete("/userid/:userid", (req, res) => {
  User.deleteByUserid(req.params.userid)
  .then(() => res.sendStatus(200))
  .catch(err => res.status(500).send(err))
})

router.get("/about", (req, res) => {
  res.render("about")
})


module.exports = router;