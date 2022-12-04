const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose');
require('./todolist/src/datas/mongodb')

mongoose.connect('mongodb://localhost:27017/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Successfully connected to mongodb'))
.catch(e => console.error(e));

app.listen(8080, () => console.log('server is running'))

app.use(express.static(path.join(__dirname, '/todolist/build')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.post("/member", (req, res) => {
  console.log(req.body)
  var [id, pw, email] = req.body
  const sqlQuery = "insert into member values (?,?,?);";
  

})

app.get('*' , (req, res) => {
  res.sendFile(path.join(__dirname, '/todo/build/index.html'))
})