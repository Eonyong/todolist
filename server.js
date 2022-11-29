const express = require('express')
const app = express()
const path = require('path')

app.listen(8080, () => {
  console.log('listening path')
})

app.use(express.json)
var cors = require('cors')
app.use(cors())

// 아래 코드를 작성해야 project/build에 있는 static 파일들을 전송해줄 수 있다.
app.use(express.static(path.join(__dirname, 'project/build')))

// project/build/index.html파일을 보내줄게요 라는 의미
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'project/build/index.html'))
})

// 예시: /product 페이지 접속 시 DB에 저장된 상품 데이터를 보여주려면..

/*
app.get('/', (req, res) => {
  res.json(`<db data>`);
})
*/

// readt-router를 사용하는 경우 아래의 코드를 최하단에 작성해놓는 것이 좋다.
// 이는 리액트에서 라우팅을 작성하는 경우 서버에서의 에러를 방지할 수 있가 때문
app.get('*' , (req, res) => {
  res.sendFile(path.join(__dirname, 'project/build/index.html'))
})