

const {startSchedule} = require('./src/task')

const {http} = require('./src/http')

  startSchedule()

  http.get('/', (req, res) => {
  res.send('Hello World!根目录')
})
http.get('/nihao', (req, res) => {
  res.send('Hello World!/nihao')
})
http.listen(3000, () => {

  console.log('web server running on port 3000')
})