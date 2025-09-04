import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.writeHead(200, {"Content-Type": "text/html"});
        fs.readFile("./public/home.html", (err, data) => {
            if(err) throw error; 
            res.end(data);
        })
    }else if(req.url === "/about"){
        res.writeHead(200, {"Content-Type": "text/html"});
        fs.readFile("./public/about.html", (err, data) => {
            if(err) throw error; 
            res.end(data);
        })
    }else{
        res.writeHead(404, {"Content-Type": "text/html"});
        fs.readFile("./public/404.html", (err, data) => {
            if(err) throw error; 
            res.end(data);
        })
    }
})
   
server.listen(8000, () => console.log("server UP!"));