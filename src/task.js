const schedule = require('node-schedule')

const {http} = require('.http')
function startSchedule(){

  schedule.scheduleJob('*/60 * * * * *', ()=>{
    
    this.sendPush()
  })

}

function sendPush(){

  const sendStr = '推送的内容'
  const pushStr = `https://api.day.app/APZB3y4mjyP5KyrQchwdXc/${sendStr}}`
  http.get(pushStr, (req,res) => {
    
    res.send('success')
  })  
} 
module.exports = {
  startSchedule
}
