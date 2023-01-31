const fs = require("fs");
const http = require("http");
const server = http.createServer((req, res)=>{
  fs.readFile("index.html", (error, data)=>{
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write(data);
    return res.end();
  })
});
server.listen(80,()=>{
    console.log("listen port 80")
})
console.log("this is main stream")