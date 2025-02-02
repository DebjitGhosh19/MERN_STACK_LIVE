let users=require('../Models/users.model')
const { v4: uuidv4 } = require('uuid');
exports.getUsers=(req,res)=>{
res.status(200).json({users})
}

exports.createController=(req,res)=>{

  const {userName,email}=req.body;
  const user={
    id:uuidv4(),
    userName,
    email
  }
  users.push(user);
  res.send(user);
}
exports.updateUser=(req,res)=>{
  const userid=req.params.id;
  const {userName,email}=req.body;
  users.filter((user)=>user.id===userid).map((selectedUser)=>{
    selectedUser.userName=userName,
    selectedUser.email=email
  })
  res.send(users)
}
exports.deleteUser=(req,res)=>{
  const userid=req.params.id;
  users=users.filter((user)=>user.id!==userid);
  

  res.send(users)
}