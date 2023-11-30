const http = require('http');

const server = http.createServer((req, res) => {
    res.end("Hello kya hal hai aap ke node pdhne me maja aaraha na ");
});

server.listen(8001, "127.0.0.1", () => {
    console.log("Server is listening on port 8000");
});
// here the main thing is your server should not be similar and it will give error if you are using same server so check it and 
// type in google that 
// localhost: server number like here is 8001 
// so it will be like 
// localhost:8001
// you will get your own server this is the power of nodejs that you can create your server