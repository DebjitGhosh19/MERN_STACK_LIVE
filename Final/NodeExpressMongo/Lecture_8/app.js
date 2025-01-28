const express=require('express');
const app=express();

const userRouter=require('./Routers/User.router');
app.get('/',(req,res)=>{
  res.send('Hello World');
}); 
app.use('/Api/user',userRouter);

app.get('/login',(req,res)=>{  
  res.statusCode=200;
  res.sendFile(__dirname+'/views/index.html');
  res.cookie('name','Debjit');
  // res.clearCookie('name');
});

app.get('/register',(req,res)=>{  
  res.statusCode=200;
  res.sendFile(__dirname+'/views/register.html');
});
app.use((req,res)=>{
    res.status(404).send('Page Not Found');
}); 
module.exports=app;