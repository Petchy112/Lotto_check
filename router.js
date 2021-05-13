const express = require('express')
const router = express.Router()
var lotto = require('./Lotto')
var news = require('./Lotto')

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
router.get('/find/:?',_id, async (req,res) => {
     await lotto.findById(req.params._id).exec((err,data) => {
        if (err) return res.json('Not found')
        res.send(result)
     })
})   
router.post('/news',async(req,res) => {
    var newHead = new news (req.body);
    await obj.save((err,data) => {
        if (err) return res.status(404) , err;
        res.json({Message:'Inserted News'})
    })
})
module.exports = router