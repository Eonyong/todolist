const express = require("express")
const hashing = require("../config/hashing")
const router = express.Router()
const User = require("../models/User")
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'MY-SECRET-KEY';


router.post("/register", (req, res) => {
  const user = new User(req.body)
  user.password = hashing.enc(user.id, user.password, "eonyong")

  let token = jwt.sign({
    type: "JWT",
    email: user.email,
    password: user.password
  }, SECRET_KEY, {
    expiresIn: '15m',
    issuer: 'eonyong'
  })

  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err })
    else return res.status(200).json({ 
      success: true,
      message: '토큰이 발급되었습니다.',
      token: token,
    })
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