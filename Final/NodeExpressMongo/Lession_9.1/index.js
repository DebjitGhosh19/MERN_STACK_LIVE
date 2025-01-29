const express=require('express');
const app=express();
const port=3001;
const bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.get('/register',(req,res)=>{
    res.sendFile(__dirname+'/register.html');
});
app.post('/register',(req,res)=>{
    const {fullName,age}=req.body;
    res.send(`Fullname: ${fullName}, Age: ${age}`);
});

app.listen(port,()=>{
  console.log(`Server is running on http://localhost:${port}`);
});
