var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
	var urlParts = url.parse(req.url, true);
	var query = urlParts.query;
	console.log(query);


  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(query.callback + '({response: "Hello World"});');
  console.log('called');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');