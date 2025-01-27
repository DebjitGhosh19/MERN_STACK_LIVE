const express=require('express');
const app=express();

const userRouter=require('./Routers/User.router');
app.get('/',(req,res)=>{
  res.send('Hello World');
}); 
app.use('/Api/user',userRouter);

app.use((req,res)=>{
    res.status(404).send('Page Not Found');
}); 
module.exports=app;