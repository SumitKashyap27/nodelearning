const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url=="/"){
        res.end("ye hai home page");
    }else if(req.url=="/about"){
        res.end("yeh hai about page");
    }else if(req.url=="/contact"){
        res.end("yeh hai contact page");
    }else{
        //if you type anything else except above three page 
        //then it will give error
        //below code is for that purpose only
        // res.writeHead(404);
        // res.end("404 page not found");
        //if you what to this page not found is an 
        //html then do this 
        res.writeHead(404,{"Content-type":"text/html"});
        res.end("<h1>404 page not found</h1>")
    }
});

server.listen(8001, "127.0.0.1", () => {
    console.log("Server is listening on port 8001");
});