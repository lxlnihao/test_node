const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send('Hello World!根目录')
})
app.get('/nihao', (req, res) => {
  res.send('Hello World!/nihao')
})
app.listen(3000, () => {

  console.log('web server running on port 3000')
})