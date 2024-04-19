require('dotenv').config()
const express = require('express')
const app = express()
// const port = 3000
const port = process.env.PORT

app.get('/', (req, res)=>{
    res.send('Hello World!')
})

app.get('/bob', (req, res)=>{
    res.send('Babin is a genius')
})

app.get('/login', (req, res)=>{
    res.send('<h1>please login to chettri.babin<h1>')
})

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})
