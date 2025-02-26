const schedule = require('node-schedule')

const {http} = require('.http')
function startSchedule(){

  schedule.scheduleJob('*/10 * * * * *', ()=>{

    console.log('每10秒执行一次')
    this.sendPush()
  })

}

function sendPush(){

  const sendStr = '推送的内容'
  const pushStr = `https://api.day.app/APZB3y4mjyP5KyrQchwdXc/推送内容`
  http.get(pushStr, (req,res) => {
    
    res.send('success')
  })  
} 
module.exports = {
  startSchedule
}
