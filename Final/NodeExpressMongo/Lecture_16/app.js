const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const path=require('path')
const UserRouter=require("./Routers/Routers.Users");
const { error } = require('console');
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());


app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'./Views/index.html'))
});

app.use('/users',UserRouter)


app.use((req,res)=>{
  res.status(404).send('Page not found')
})
app.use((error,req,res)=>{
  res.status(500).send('Somting is brock ');
})
module.exports=app;