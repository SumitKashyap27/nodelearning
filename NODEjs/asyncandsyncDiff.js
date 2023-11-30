const fs= require("fs");

// const data=fs.readFileSync("read.txt","utf-8");

// console.log(data);
// console.log("koi na phir bhi jeena hai");

// now learning asynchronous

fs.readFile("read.txt","utf-8",(err,data)=>{
    console.log(data);
});
console.log("koi na phir bhi jee lenge");

// here you can notice how sync and async works 
