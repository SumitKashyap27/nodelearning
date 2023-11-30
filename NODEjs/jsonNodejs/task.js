const fs=require("fs");

const biodata= {
    name:"sumit",
    age:"20",
    year:"3rd"
}
// 1. convert it to json
// 2. dusare file me add krdena
// 3. readfile
// 4. again convert it back to object
// 5. console.log

//1 and 2
const jsonData=JSON.stringify(biodata);
fs.writeFile("json1.json",jsonData,(err)=>{
    console.log("done")
});

//3.
fs.readFile("json1.json","utf-8",(err,data)=>{
    console.log(data);
})
// output
// {"name":"sumit","age":"20","year":"3rd"}

// 4. and 5
fs.readFile("json1.json","utf-8",(err,data)=>{
    const orgData=JSON.parse(data);
    console.log(orgData);
})
// output
// { name: 'sumit', age: '20', year: '3rd' }

