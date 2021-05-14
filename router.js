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
    var obj = new lotto(req.body);
    await obj.save((err,data) => {
        if (err) return res.status(400) , err;
        res.json({Message:'Inserted'})
    })
})
router.get('/find', async (req,res) => {
    const tailTwo  = req.query.num.slice(-2);
    const headThree = req.query.num.slice(0,3);
    const tailThree = req.query.num.slice(3,6);
    const first = req.query.num;
    const second = req.query.num;
    const third = req.query.num;
    const forth = req.query.num;
    const fifth = req.query.num;
    console.log(first);
    console.log(tailTwo);
    await lotto.find(( { $or: [ {headThree},{tailTwo},{tailThree},{first},{second},{third},{forth},{fifth} ] } ),(err,result) => {

        if (err) return res.json('not found').status(404);
        res.json(result);
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
