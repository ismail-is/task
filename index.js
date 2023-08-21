const express = require('express');
const app = express();
const ConnectMongo = require('./db');
const curdSchema =require('./curd');
app.use(express.json())

app.use('/api/product',require('./Router/prouter'))
// app.post('/api/insert',async(req,res)=>{
//     try{
//         const {name,age}=req.body;
//         const data =new curdSchema({name,age});
//         const savedata= await data.save();
//         console.log("insert successully");
//         res.send({savedata});

//     }
//     catch(err){
//         console.log("errr",err);

//     }
// })
ConnectMongo();
port =7000;
app.listen(port,()=>{
    console.log(`server running ${port}`);
})
