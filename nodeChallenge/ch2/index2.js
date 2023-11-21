// challenge 2
// 1. create a folder and name it;
// 2. create a file in it named Bio.txt and data into it
// 3. Add more data into the file at the end of the existing data
// 4 read the data without getting the buffer data at the first
// it will be done through file encoding
// 5.rename the file name to mybio.txt
// 6.now delete both the file and the folder

const fs=require("fs");
// fs.mkdir("newf",(err)=>{
//     console.log("folder Created")
// });

// fs.writeFile("./newf/bio.txt","kyu kr raha hu mai",
// (err)=>{
//     console.log("file is created");
// });

// fs.appendFile("./newf/bio.txt"," pta nahi pr karna hai",
// (err)=>{
//     console.log("append done ");
// });

// fs.readFile("./newf/bio.txt","utf-8",(err,data)=>{
//     console.log(data);
// });

// fs.rename("./newf/bio.txt","./newf/mybio.txt",
// (err,data)=>{ console.log("rename done")});


fs.unlink("./newf/mybio.txt",(err)=>{
    console.log("file deleted");
});