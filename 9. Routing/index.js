import http from "http"

const server = http.createServer((res, req) =>{
    //routing
    // console.log(req.url);

    if(req.url === "/"){
        res.end(`<section>
            <h1>Home page</h1>
            <a href='/about'>About</a>
            </section>`);

    }else if(req.url === "/about"){
        res.end("<h1>About page</h1>");
    }else{
        res.end("<h1>404 Not Found</h1>");
    }

})


server.listen(8000, () => console.log("server UP!"));