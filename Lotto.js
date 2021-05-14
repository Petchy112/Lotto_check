const { text } = require('body-parser');
var mongoose = require('mongoose');
var lottoSchema = mongoose.Schema({
    first : 
          String 
    ,
    tailTwo : 
        String
    ,
    second : [
        String 
        
    ],
    third : [
        String,
    ],
    forth : [
        String,
    ],
    fifth : [
        String,
    ],
    headThree : [
       String    
    ],
    tailThree : [
        String,  
    ],
})


var Lotto = mongoose.model('Prize',lottoSchema)


module.exports = Lotto
