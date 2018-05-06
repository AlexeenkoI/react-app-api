const url = require('../etc/config');
var express = require('express');
var router = express.Router();


router.post('/sliders/getSliders',function(req,res){

    res.json({status:"ok",data:"sliders-route"})
})

router.get('/sliders/getSliders',function(req,res){
    res.json({status:"ok",data:"get-sliders-route"});
})

module.exports = router;