const express        = require('express');
const bodyParser     = require('body-parser');

const app = express();
const port = 8000;



async function read(){
	await console.log('read async');
}



app.listen(port,()=>{
	read();
	console.log('server started on port '+port);
})

