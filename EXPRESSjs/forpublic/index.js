const path = require("path");
const express=require("express");
const app = express();
const port = 8000;

//builtin middleware

// const staticPath=path.join(__dirname,"../public");

// app.use(express.static(staticPath))

// const port = 8001;

// app.get("/",(req,res)=>{
//     res.send("hello World!") 
// })

// app.get("/about",(req,res)=>{
//     res.send("hello from about page");
// })

// app.listen(port,()=>{
//     console.log(`app listening on port ${port}`)
// })

// output app listening on port 8001

//now we are making it dynamic using view engine or template engine by using hbs we can use different template engines like pug, mustache , ejs 

const staticPath=path.join(__dirname,"../public");

// to  set the view engine 
//we need to name it which engine we are using

app.set("view engine","hbs"); //we have to name it like here i havbe used hbs 
// if you are using pug or ejs you have to write it in place of hbs

app.get("",(req,res)=>{
    res.render('index')//here when we type like this we are rendering the file 
} )
app.get("/",(req,res)=>{
    res.send("hello World!") 
})

app.get("/about",(req,res)=>{
    res.send("hello from about page");
})

app.listen(port,()=>{
    console.log(`app listening on port ${port}`)
})
//dont know but this error is coming
// Error: Failed to lookup view "index" in views directory "D:\nodejslearning\EXPRESSjs\forpublic\views"
//     at Function.render (D:\nodejslearning\EXPRESSjs\node_modules\express\lib\application.js:597:17)
//     at ServerResponse.render (D:\nodejslearning\EXPRESSjs\node_modules\express\lib\response.js:1039:7)
//     at D:\nodejslearning\EXPRESSjs\forpublic\index.js:39:9
//     at Layer.handle [as handle_request] (D:\nodejslearning\EXPRESSjs\node_modules\express\lib\router\layer.js:95:5)
//     at next (D:\nodejslearning\EXPRESSjs\node_modules\express\lib\router\route.js:144:13)
//     at Route.dispatch (D:\nodejslearning\EXPRESSjs\node_modules\express\lib\router\route.js:114:3)
//     at Layer.handle [as handle_request] (D:\nodejslearning\EXPRESSjs\node_modules\express\lib\router\layer.js:95:5)
//     at D:\nodejslearning\EXPRESSjs\node_modules\express\lib\router\index.js:284:15
//     at Function.process_params (D:\nodejslearning\EXPRESSjs\node_modules\express\lib\router\index.js:346:12)
//     at next (D:\nodejslearning\EXPRESSjs\node_modules\express\lib\router\index.js:280:10)