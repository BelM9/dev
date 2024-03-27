var http = require('http')

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
    res.end('server.js : Hello,world')
    console.log(req)
}).listen(3000)




