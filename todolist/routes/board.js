const express = require('express')
const router = express.Router()

const Boards = require('../src/datas/model/User')

router.get('/', (req, res, next) => {
  Boards.find((err, board) => {
    res.json(board)
  })
})

router.post('/', (req, res, next) => {
  const { email, nameId } = req.body
  const boards = new Boards({
    email: email,
    nameId: nameId
  })
  boards.save((err, board) => {
    res.json(board)
  })
})

module.exports = router