var mongoose = require('mongoose');
var lottoSchema = mongoose.Schema({
    firstPrize : {
        type : String
    },
    secondPrize : {
        type : String
    },
    thirdPrize : {
        type :String
    },
    forthPrize : {
        type :String
    },
    fifthPrize : {
        type :String
    }
})

var Lotto = mongoose.model('User',lottoSchema)
module.exports = Lotto