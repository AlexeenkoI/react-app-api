const url = require('../etc/config');
var express = require('express');
var router = express.Router();

router.post('/services/getServices',function(req,res){

    res.json({status:"ok",data:"services-route"})
})

module.exports = router;