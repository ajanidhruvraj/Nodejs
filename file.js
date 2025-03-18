const fs = require("fs"); //fs is an built in module for file handling

//sync..
fs.writeFileSync("./test.txt","Hello World");

//async..
fs.writeFile("./test.txt","Hello world Async", (err)=>{})

const result = fs.readFileSync("./contact.txt", "utf-8");
console.log(result);

fs.readFile("./contact.txt", "utf-8" , (err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log(result);
    }
})

fs.appendFileSync("./test.txt",`${Date.now()}Hello There\n`)

fs.cpSync("./test.txt","./cpy.txt");

fs.unlinkSync("./cpy.txt");

console.log(fs.statSync("./test.txt"));