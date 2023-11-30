const fs = require("fs");
//creating a new file
//fs.writeFileSync('read.txt', "welcome");
//fs.writeFileSync('read.txt', "welcome to world");

//fs.appendFileSync('read.txt', " itna bhi acha nahi hai ");

const buf_data=fs.readFileSync("read.txt");
//console.log(buf_data);


//<Buffer 77 65 6c 63 6f 6d 65 20 74 6f 20 77 6f 72 6c 64 20 69 74 6e 61 20 62 68 69 20 61 63 68 61 20 6e 61 68 69 20 68 61 69 20>
//this is the buffer data which is additional in node and it is niot include in js browser
//it stores binary data
//while leading from a file or receving packets over the network

org_data=buf_data.toString();

console.log(org_data);

//if you waNT TO REname then 
//  fs.renameSync("read.txt","readwrite.txt");
//this you can use oldname then new name 
