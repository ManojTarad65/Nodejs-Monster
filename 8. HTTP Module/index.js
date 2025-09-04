import http from "http"

// Create our server
const server =http.createServer((req, res) => {
    console.log(req);
    res.end("Hello World");
});

//Listening on port 8000
server.listen(8000, () => console.log("server UP!"));