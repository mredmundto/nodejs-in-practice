var CountStream = require('./countstream');
var countStream = new CountStream('a'); 
var http = require('http'); 

http.get('http://www.manning.com', function(res){
	res.pipe(countStream); 
});

countStream.on('total', function(count){
	console.log('total match', count);
})