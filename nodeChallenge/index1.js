//CRUD CHALLENGE 
//CREATE READ UPDATE DELETE
const fs = require("fs");

//fs.mkdirSync("newfolder");

//fs.writeFileSync("newfolder/bio.txt","for challenge purpose");

//fs.appendFileSync("newfolder/bio.txt","here i am appending some data");

//const data=fs.readFileSync("newfolder/bio.txt","utf8");
//we will add utf-8 which will prevent file encoding and without buffer we can read data without buffer data 
//console.log(data);

fs.renameSync("newfolder/bio.txt","newfolder/mybio.txt");
//  for deleting 
//  fs.unlinkSync("newfolder/mybio.txt");