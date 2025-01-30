const path=require('path');
const Users=require('../Model/Db');
exports.getUsers=(req,res)=>{
  res.sendFile(path.join(__dirname,'../View/index.html'));
} 
exports.postUser=(req,res)=>{
  const {username,email,password}=req.body;
  const user={username,
    email,
    password};
  Users.push(user);
  res.send(Users);
}