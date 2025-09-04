import http from "http"

// Create our server
const server =http.createServer((req, res) => {
    // console.log(req);
    // res.end("Hello World");
    res.statusCode= 404;
    res.setHeader("Content-Type", "text/html");
    res.statusMessage= "Not Found";
    res.write("<h1>Hello from nodejs server</h1>");

});

//Listening on port 8000

server.listen(8000, () => console.log("server UP!"));

