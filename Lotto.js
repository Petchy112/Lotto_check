var mongoose = require('mongoose');
var lottoSchema = mongoose.Schema(
    first =
        num = {type : String}
    ,
    tailTwo =
        num = {type : String}
    ,
    second = [
        num = {type : String, }
    ],
    third = [
        num = {type : String}
    ],
    forth = [
        num = {type : String}
    ],
    fifth = [
        num = {type : String}
    ],
    headThree = [
        num = {type : String}
    ],
    tailThree = [
        num = {type : String}
    ],
    
)

var newsSchema = mongoose.Schema({
    News : [
        header = { type :String }
        
    ]
})
var Lotto = mongoose.model('Prize',lottoSchema)
var news = mongoose.model('News',newsSchema)

module.exports = news
module.exports = Lotto