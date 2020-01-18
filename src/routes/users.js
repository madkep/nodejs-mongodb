const router = require('express').Router();

const Users = require('../models/Users');
const passport = require('passport');

router.get('/users/signin',(req,res) =>{
    res.render('users/signin');
});

router.get('/users/signup',(req,res) =>{
    res.render('users/signup');
});


router.post('/users/signup', async (req,res)=>{
    const {name , email, password} = req.body;


    const newUser = new Users({name,email,password});
    newUser.password = await newUser.encryptPassword(password);
    await newUser.save();
    res.redirect('/users/signin');
});


router.post('/users/sigin', passport.authenticate('local',{
    successRedirect: '/notes',
    failureRedirect: '/users/signin',
}));

router.get('/login',(req,res) =>{
    res.send('login');
});




module.exports = router

