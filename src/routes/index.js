const router = require('express').Router();

router.get('/index',(req,res) =>{
    res.render('index');
});

router.get('/about',(req,res) =>{
    res.render('about');
});






module.exports = router

