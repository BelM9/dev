var http = require('http');
var fs = require('fs');
cd
//create a server object:
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World!'); //write a response to the client
 /* console.log('Hello World!');
  if (err) {
    res.writeHead(404, {'Content-Type': 'text/html'});
    return res.end("404 Not Found");
  } */
  res.end(); //end the response
}).listen(3000); //the server object listens on port 3000 