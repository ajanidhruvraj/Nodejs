const express = require('express');
const fs = require('fs');
const data = require('./mock_data.json');
const { json } = require('stream/consumers');

const app = express();
const port = 8000;
app.use(express.urlencoded({extended:"false"}))

app.get('/user' ,(req,res)=>{
    return res.json(data);
    
})
app.get('/user/name' ,(req,res)=>{
    const html =`
    <ul>
        ${data.map((name) => `<li>${name.first_name}</li>`).join("")}
    </ul>
    `
    res.send(html);
})
// app.get('/user/name/:id',(req,res)=>{
//     const id = Number(req.params.id);
//     const user = data.find((user)=> user.id===id);
//     return res.json(user)
// })

app.route('/user/name/:id').get((req,res)=>{
    const id = Number(req.params.id);
    const user = data.find((user)=> user.id===id);
    return res.json(user)
}).patch((req,res)=>{
    return res.json({status:"pending"});
}).delete((req,res)=>{
    return res.json({status:"pending"});
})
app.post('/user/post',(req,res)=>{
    const body = req.body;
    data.push({...body,id:data.length+1})
    fs.writeFile('./mock_data.json',JSON.stringify(data),(req,res)=>{
        return res.json({status:"pending"});
    })
})

app.listen(port,()=>{ console.log(`the server is on port ${port}`);})