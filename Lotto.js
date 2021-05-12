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

var Lotto = mongoose.model('Prize',lottoSchema)
module.exports = Lotto