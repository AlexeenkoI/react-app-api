const url = require('../etc/config');
var express = require('express');
var router = express.Router();

router.post('/login',function(req,res){
	console.log('here');
	const currlogin = 'admin';
	const currpass = 'mihadomain';
	console.log(req.body.login);
	console.log(req.body.password);
	if(req.body.login && req.body.password){
		if(currlogin.toString() === req.body.login.toString() && currpass.toString() === req.body.password.toString()){
			res.status(200).json({
				status:'ok',
				name:currlogin,
				token:TokenGen()
			})
		}else{
			res.status(200).json({
				status:'error',
				error:'wrong login or password'
			})
		}
	}else{
		res.status(200).json({
			status:'error',
			error:'you are not allowed to be here'
		})
	}


})

function TokenGen(){ 
    var tokenLength = 15;
    var stringArray = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','!','?'];
    var token = "";
    for (var i = 1; i < tokenLength; i++) { 
        var rndNum = Math.ceil(Math.random() * stringArray.length) - 1;
        token = token + stringArray[rndNum];
    };
    return token;
}


module.exports = router;