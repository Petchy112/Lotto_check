const express = require('express');
const { findByIdAndDelete } = require('./Lotto');
const router = express.Router();
var lotto = require('./Lotto');
var news = require('./News');

    
router.get('/',(req,res) => {
    lotto.find().exec((err,data) => {
        res.send(data)
    })
})
router.post('/addlotto', async (req,res) => {
    var obj = new lotto(req.body);
    await obj.save((err,data) => {
        if (err) return res.status(400),err;
        res.json({Message:'Inserted'})
    })
})
router.delete('/delete/:_id', async (req,res)=>{
    await findByIdAndDelete((req.params._id),(err,result)=>{
        if (err) return res.status(400) ,err;
        res.status(200).json({message:'Deleted'});
    })
})
router.get('/check', async (req,res) => {
    const tailTwo  = req.query.num.slice(-2);
    const headThree = req.query.num.slice(0,3);
    const tailThree = req.query.num.slice(-3);
    const first = req.query.num;
    const second = req.query.num;
    const third = req.query.num;
    const forth = req.query.num;
    const fifth = req.query.num;
    console.log(first);
    console.log(tailTwo);
    await lotto.find(( { $or: [ {headThree},{tailTwo},{tailThree},{first},{second},{third},{forth},{fifth} ] } ),(err,result) => {
        if (err) return err;
        res.json(result);
     });
})

router.post('/addnews',async(req,res) => {
    var env = new news(req.body);
    await env.save((err,newEnv)=>{
        if (err) return status(400);
        res.json({message:'Inserted'});
    })
})
router.get('/news',async(req,res) => {
    await news.find().exec((err,newEnv) => {
        res.json(newEnv)
    })
})

module.exports = router
