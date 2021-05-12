const express = require('express')
const router = express.Router()
var lotto = require('./Lotto')

router.get('/',(req,res) => {
    lotto.find().exec((err,result) => {
        res.json({Message:'Done'})
        console.log('Done')
    })
})


module.exports = router