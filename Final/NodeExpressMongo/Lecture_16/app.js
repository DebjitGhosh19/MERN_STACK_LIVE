const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const path=require('path')

const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());


app.use('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'./Views/index.html'))
});




module.exports=app;