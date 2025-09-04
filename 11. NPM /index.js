// npm install nodemon --save-dev
// npm run dev
// nodemon -> it will restart the server automatically when we make changes in the code




import http from "http";

const server = http.createServer((req, res) => {
    res.end("Hello from nodejs server !");
});

server.listen(8000, () => console.log("server UP!"));