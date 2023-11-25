const biodata= {
    name:"sumit",
    age:"20",
    year:"3rd"
}
// there are only tow methods this method will convert 
// it object to json
const jsonData=JSON.stringify(biodata);
console.log(jsonData);
//output
// {"name":"sumit","age":"20","year":"3rd"}

// method 2 if you want to convert it back to on=bject then 
// do this

const objData=JSON.parse(jsonData);
console.log(objData);
// output
// { name: 'sumit', age: '20', year: '3rd' }