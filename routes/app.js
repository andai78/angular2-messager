var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function (req, res, next) {
    User.findOne({}, function(err, doc){
        if(err){
            return res.send('Error!')
        }
        res.render('msg', {email: doc.email});
    })
});

router.get('/message', function (req, res, next) {
    res.render('msg');
});

router.post('/', function(req, res, next){
    var email = req.body.email;
    var user = new User({
        firstname: 'Andy',
        lastname: 'T',
        pass: '1234',
        email: email
    });
    user.save();
    res.redirect('/');
})

module.exports = router;
