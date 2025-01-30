const path=require('path');
const Users=require('../Model/User.model');

exports.getUsers = (req, res) => {
  res.sendFile(path.join(__dirname,'../View/index.html'));
}
exports.SaveUser = (req, res) => {
  const name=req.body.name;
  const id=req.body.id;
  const user={
    id,
    name
  }
  Users.push(user);
  res.send(Users);
}