const mongoose = require('mongoose')
var newsSchema = mongoose.Schema({
    topic :  String,
    title : String,

})
var news = mongoose.model('Env',newsSchema)

module.exports = news