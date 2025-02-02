const { v4: uuidv4 } = require('uuid');
const users=[
 {
  id:uuidv4(),
  userName:'Debjit Ghosh',
  email:'ghoshdebjit@gmail.com'
 } ,
 {
  id:uuidv4(),
  userName:'Deb Ghosh',
  email:'ghoshdeb@gmail.com'
 } ,
 {
  id:uuidv4(),
  userName:'Jit Ghosh',
  email:'ghoshJit@gmail.com'
 } 
]
module.exports=users;