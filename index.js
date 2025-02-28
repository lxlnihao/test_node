

const {http} = require('./src/http')
const schedule = require('node-schedule')
const axios = require('axios')
const userController = require('./src/connect_mysql/userController');


  http.get('/', (req, res) => {
  res.send('Hello World!根目录')
})
http.get('/nihao', (req, res) => {
  res.send('Hello World!/nihao')
})

http.get('/sendpush', (req, res) => {
  const pushStr = `https://api.day.app/APZB3y4mjyP5KyrQchwdXc/推送内容11`
  axios.get(pushStr)
  .then(response => {
     console.log(response.data)
     res.send('Hello World!/sendpush:response')
   })
  .catch(error => {
     console.log(error)
     res.send('Hello World!/sendpush:error')
  })
  
})
schedule.scheduleJob('*/9 * * * * *', ()=>{

  
  
})

http.get('/users', async (req, res) => {
  try {
    const users = await userController.getUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
 
 
http.listen(3000, () => {

  console.log('web server running on port 3000')
})