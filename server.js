const fs = require("fs");
const http = require("http");
const server = http.createServer((req, res)=>{
    if(req.url === "/data"){
        res.writeHead(200, {'Content-type': 'application/json'});
        res.write(JSON.stringify({name: "mg mg"}));
        return res.end();
    }
    else if(req.url === "/"){
        fs.readFile("index.html", (error, data)=>{
            res.writeHead(200, {'Content-type': 'text/html'});
            res.write(data);
            return res.end();
          })
    }
    else if (req.url === "/script.js"){
        fs.readFile("script.js", (error, data)=>{
            res.writeHead(200, {'Content-type': 'text/html'});
            res.write(data);
            return res.end();
        })
    }
    else{  res.writeHead(404, {'Comtent-type': 'text/plain'});
    res.write(error);
    return res.end();
}
})     
  

server.listen(80,()=>{
    console.log("listen port 80")
})
console.log("this is main stream")