var mongoose = require('mongoose');
var lottoSchema = mongoose.Schema({
    firstPrize : 
        num = {type : String}
    ,
    secondPrize : [
        num = {type : String}
    ],
    thirdPrize : [
        num = {type : String}
    ],
    forthPrize : [
        num = {type : String}
    ],
    fifthPrize : [
        num = {type : String}
    ]
})

var newsSchema = mongoose.Schema({
    News : [
        header = { type :String },
        picture = { type : Image }
    ]
})
var Lotto = mongoose.model('Prize',lottoSchema)
var news = mongoose.model('News',newsSchema)

module.exports = news
module.exports = Lotto