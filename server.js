const server = require('express')();
const jsonParser = require('body-parser');
const ulrs = require('./etc/config');


const port = 8000;

//using body parser middleware via new express 4.x rules see more at  http://expressjs.com/ru/4x/api.html#req
server.use(jsonParser.json()); // application/json
server.use(jsonParser.urlencoded({ extended: false })); /// x-form-ulr-encoded
/////////////////////////////////////////////

async function read(){
	await console.log('read async');
}

const test = () =>{
	console.log('test');
}

server.listen(port,()=>{
	console.log('server started on port '+port);
})


server.post(apiurls.basicUrl,function(req,res){
	res.json({type:"ok",status:"200"});
})

