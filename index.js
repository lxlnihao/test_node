

const {http} = require('./src/http')
const schedule = require('node-schedule')
const axios = require('axios')


  http.get('/', (req, res) => {
  res.send('Hello World!根目录')
})
http.get('/nihao', (req, res) => {
  res.send('Hello World!/nihao')
})

schedule.scheduleJob('*/9 * * * * *', ()=>{

  
  const pushStr = `https://api.day.app/APZB3y4mjyP5KyrQchwdXc/推送内容`
   axios.get(pushStr)
   .then(response => {
      console.log(response.data)
    })
   .catch(error => {
      console.log(error)
   })
})
 
 
http.listen(3000, () => {

  console.log('web server running on port 3000')
})