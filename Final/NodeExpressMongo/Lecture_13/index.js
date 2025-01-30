const express=require('express');

const app=express();
const port=3000;


const middleware=(req,res,next)=>{
  console.log('I am a middleware');
  next();
}
app.get('/', middleware,(req,res)=>{
  res.send('Hello World');
}); 


app.listen(port,()=>{
    console.log(`Server is running on port http://localhost:${port}`);  
}
);
