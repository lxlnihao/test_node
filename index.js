

const {http} = require('./src/http')
const schedule = require('node-schedule')


  http.get('/', (req, res) => {
  res.send('Hello World!根目录')
})
http.get('/nihao', (req, res) => {
  res.send('Hello World!/nihao')
})

schedule.scheduleJob('*/9 * * * * *', ()=>{

  console.log('每9秒执行一次')
  this.sendPush()
})
function sendPush(){
  const pushStr = `https://api.day.app/APZB3y4mjyP5KyrQchwdXc/推送内容`
  http.get(pushStr, (req,res) => {
    
    res.send('success')
  }) 
}
 
http.listen(3000, () => {

  console.log('web server running on port 3000')
})