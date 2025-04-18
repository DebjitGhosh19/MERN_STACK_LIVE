const { User } = require("../model/user.model");
const getRegisterData=async (req,res) => {
  const {username,email,password}=req.body;
  if (!username||!email ||!password) {
    res.status(404).json({
      message:"Require all filed",
      success:false
    })
  }
  const user=User.findOne({email})
  if(user){
    res.status(404).json({
      message:"Eamil is already used",
      success:false
    })
  }
  const newUser= new User({
    username,
    email,
    password
  })
  await newUser.save().then(()=>{
    console.log("New User save");
  })
  .catch((err)=>{
    console.log("Error occure while save new user");
    
  })
}