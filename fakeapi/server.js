const express = require('express');
const app = express();

app.use(express.json());
app.get('/fakeapi',(req,res, next)=>{
    res.send("FAKE SERVER");
})
app.get('/api',(req,res,next)=>{
    res.send("THis the apii route of the fake API server");
})

app.listen(3001,()=>{
    console.log('Fake server Online');
})