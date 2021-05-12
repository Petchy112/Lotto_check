const express = require('express')
const app = express()
const port = process.env.port || 5000

app.get('/',(req,res) => {
    console.log('Get started!')
})


app.listen(port , () => {
    console.log('Connected!')
})