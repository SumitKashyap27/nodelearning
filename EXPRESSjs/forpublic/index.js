const path = require("path");
const express=require("express");
const app = express();

const staticPath=path.join(__dirname,"../public");
//builtin middleware
app.use(express.static(staticPath))
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
