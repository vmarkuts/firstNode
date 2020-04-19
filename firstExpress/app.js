var express = require('express');
var app = express();

// '/' => 'Hi there!'

//req = request
//res = response
app.get('/',function(req,res){
	res.send('Hi there!');
});

// '/bye' => 'Goodbye!'
// '/dog' => 'MEOW!'

app.listen(process.env.PORT, process.env.IP, function() {
	console.log('server has started');
}); 