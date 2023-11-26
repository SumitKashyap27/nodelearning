const fs = require("fs");
const http = require("http");

const server = http.createServer();
// server.on("request",(req,res)=>{
//     fs.readFile("input.txt",(err, data)=> {
//         if (err) return console.error(err);
//         res.end(data.toString());
//     })

// })
// this was old way data is static not streaming 

//this is way
// read from a stream
// create a readable strream
// handle stream events-> data, end, and error

server.on("request",(req,res)=>{
    const rstream = fs.createReadStream("input.txt");
    rstream.on('data',(chunkdata)=>{
        res.write(chunkdata);
    });
    rstream.on("end",()=>{
        res.end();
    });
});

server.listen(8000, "127.0.0.1");