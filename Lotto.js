var mongoose = require('mongoose');
var lottoSchema = mongoose.Schema({
    first : {
        num : {type : String} ,
        myText : {type :String}
    },
    nearFirst: {
        num : {type:String},
    },
    tailTwo : {
        num : {type : String}
    },
    second : {
        num : {type : String, },
        myText : {type :String}
    },
    third : {
        num : {type : String},
        myText : {type :String}
    },
    forth : {
        num : {type : String},
        myText : {type :String}
    },
    fifth : {
        num : {type : String},
    },
    headThree : {
        num : {type : String},
        myText : {type :String}
    },
    tailThree : {
        num : {type : String},
        myText : {type :String}
    },
})
var Lotto = mongoose.model('Prize',lottoSchema)


module.exports = Lotto