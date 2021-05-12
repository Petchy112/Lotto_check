const { response } = require('express')
const express = require('express')
const router = express.Router()
var lotto = require('./Lotto')

router.get('/',(req,res) => {
    lotto.find().exec((err,data) => {
        res.send(data)
    })
})
router.post('/add', async (req,res) => {
    var obj = new lotto (req.body);
    await obj.save((err,data) => {
        if (err) return res.status(400) , err;
        res.json({Message:'Inserted'})
    })
})

module.exports = router