var http = require("http");

http.createServer(function (req, res) {
   res.writeHead(200, {'Content-Type': 'text/plain'});
   res.end('chào node js\n');
}).listen(777);

console.log('Server running at 777');