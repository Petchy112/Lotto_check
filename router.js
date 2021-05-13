const express = require('express')
const router = express.Router()
var lotto = require('./Lotto')
var news = require('./Lotto')
var insertNum;
    
router.get('/',(req,res) => {
    lotto.find().exec((err,data) => {
        res.send(data)
    })
})
router.post('/add', async (req,res) => {
    var obj = new lotto(req.body);
    await obj.save((err,data) => {
        if (err) return res.status(400) , err;
        res.json({Message:'Inserted'})
    })
})
router.get('/find', async (req,res) => {
     lotto.find((req.body),(err,result) => {
        if (err) return res.json('not found').status(404);
        res.send(result);
     });
})

router.post('/news',async(req,res) => {
    var newHead = new news (req.body);
    await newHead.save((err,data) => {
        if (err) return res.status(404) , err;
        res.json({Message:'Inserted News'})
    })
})
module.exports = router
