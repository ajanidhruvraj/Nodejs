const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req,res)=>{
    const log =`${Date.now()}: New Req Recevived\n`
    fs.appendFile("./test.txt", log,(err,data)=>{
        console.log("New request rec. ",req.headers);
        res.end("Hey there...");
        switch (req.url) {
            case "/":
                res.end("This is Home Page");
                break;

            case "/about":
                res.end("This is About US Page");
                break;
        
            default:
                res.end("This is default");
                break;
        }
    })
})

myServer.listen(8000,()=>{console.log("This is server")})