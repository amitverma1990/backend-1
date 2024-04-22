const express = require('express')
require('dotenv').config()
const app = express()
const port = 3000
const jdata = {  
    "employee": {  
        "name":       "sonoo",   
        "salary":      56000,   
        "married":    true  
    }  
} 
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/home', (req, res) => {
    res.send('<h1>Home</h1>')
  })

app.get('/jdata1', (req, res) => {
    res.json(jdata)
  })
  app.get('/red', (req, res) => {
    res.redirect('http://google.com')
  })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})