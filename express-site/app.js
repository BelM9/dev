const express = require('express')
const fs = require('fs')

const app = express();

app.get('/', (req, res) => {
  fs.readFile('index.html','utf8',(err,data)=>{
    if (err) throw err
    res.send(data)
  })  
})

app.get('/contact', (req, res) => {
  fs.readFile('contact.html','utf8',(err,data)=>{
    if (err) throw err
    res.send(data)
  })  
})

app.get('/about', (req, res) => {
  fs.readFile('about.html','utf8',(err,data)=>{
    if (err) throw err
    res.send(data)
  })  
})

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('écoute à travers le port 3000')
})