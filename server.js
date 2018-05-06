const server = require('express')();
const jsonParser = require('body-parser');
const apiurls = require('./etc/config');
var cors = require('cors');



const port = 8000;

//using body parser middleware via new express 4.x rules see more at  http://expressjs.com/ru/4x/api.html#req
server.use(jsonParser.json()); // application/json
server.use(jsonParser.urlencoded({ extended: false })); /// x-form-url-encoded
///////////////////////////
// enable cors policy for local api calls test from browser
server.use(cors());
///////////////
const loginRouter = require('./routes/login');
const sliderRouter = require('./routes/slider');
const servicesRouter = require('./routes/services');



async function read(){
	await console.log('read async');
}

const test = () =>{
	console.log('test');
}

server.listen(port,()=>{
	console.log('server started on port '+port);
})

//server.post(apiurls.login,router);
server.use('/apiv1/admin/',loginRouter);
server.use('/apiv1/admin/',sliderRouter);
server.use('apiv1/admin/',servicesRouter);

server.post(apiurls.basicUrl,function(req,res){
	//console.log(req.body.data);
	res.status(200).json({type:"ok",status:"200"});
})




