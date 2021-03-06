const express = require('express')
const app = express()
const port = process.env.port || 5000
const mongoose = require('mongoose')
const bodyparser = require('body-parser')

var mongouri = 'mongodb+srv://admin:petch15918@cluster1.fs0qx.mongodb.net/Lotto?retryWrites=true&w=majority'
mongoose.connect(mongouri,{useNewUrlParser:true}).then(
    () => {
        console.log('Connect DB')
    },
    error => {
        console.log(error);

    }
)


app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())


var web = require('./router')
app.use('/',web)



app.listen(port , () => {
    console.log('Connected!')
})