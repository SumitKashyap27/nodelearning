// we have to doo foloowing things in this file

//www.sumit.com- welcome to my home page
// /about- welcome to my about page
// /contact- welcome to my contact page
// /temp- welcome to my temp page

const express=require("express");
const app=express();
const port =8000;
app.get("/",(req,res)=>{
    res.status(200).send("welcome to my home page");
})
// this status code 200 represents that page exists 
// writing this is optional
app.get("/about",(req,res)=>{
    res.send("welcome to my about page");
})
app.get("/contact",(req,res)=>{
    res.send("welcome to my contact page");
})
app.get("/temp",(req,res)=>{
    res.send("welcome to my temp page");
})

app.listen(port,()=>{
    console.log(`listening to the port on ${port}`);
})