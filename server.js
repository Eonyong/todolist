const express = require('express')
const app = express()
const path = require('path')

app.listen(8080, () => console.log('server is running'))

app.use(express.static(path.join(__dirname, '/todolist/build')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('*' , (req, res) => {
  res.sendFile(path.join(__dirname, '/todo/build/index.html'))
})