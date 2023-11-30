const express=require("express");
const app = express();

// for making api it requires:
// get-read
// post-create
// put- update
// delete- delet
 
// app.get(route, callback)
// that your route is "/"
// you can also write it as app

// the callback function has 2 parameters, request(req) and response(res).
// The request object(req) represents the HTTP request and 
// has properties for the request query string, parameters,body,
// HTTP  HEADERS, etc.
// similarly, the response object represent the HTTP response
// that the express app sends when it receives an http request 

// your "/" is your domain name and like those things 
//like www.google.com this www.google.com is "/"

const port = 8001;
app.get("/",(req,res)=>{
    res.send("hello World!")
})
app.get("/about",(req,res)=>{
    res.send("hello from about page");
})
app.listen(port,()=>{
    console.log(`app listening on port ${port}`)
})
// output app listening on port 8001