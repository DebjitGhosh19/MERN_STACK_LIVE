import userModel from "../models/userModel.js";
import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

//create token 
const createToken=(id)=>{
   return jwt.sign({id},process.env.JWT_SECRATE)
}
//Route for user login
export const loginUser=async(req,res)=>{
try {
   const {email,password}=req.body;
   const user=await userModel.findOne({email});
   if (!user) {
     return res.json({success:false,message:"User doesn't exist"})
   }
  const passwordCheck=await bcrypt.compare(password, user.password);
  if (passwordCheck) {
   const token=createToken(user._id)
 return  res.json({success:true,token})
  } else {
   return res.json({success:false,message:"Invalid credentials"});
  }
} catch (error) {
    console.log(error);
  res.json({success:false,message:error.message})
}
}
//Route for user register
export const registerUser=async(req,res)=>{
try {
  
  const {name,email,password}=req.body;
  //Checking user already exist or not
const exist=await userModel.findOne({email});
if (exist) {
 return res.json({success:false,message:"User already exists"});
}
//Checking user email and strong password
if (!validator.isEmail(email)) {
   return res.json({success:false,message:"Please enter a  valid email"});
}
if (password.length<8) {
   return res.json({success:false,message:"Please enter a  strong password"});
}
//Hashing user password
const salt =await bcrypt.genSalt(10);
const hashPassword =await bcrypt.hash(password, salt);

//Create user 
const newUser=new userModel({
   name,email,password:hashPassword
})
const user=await newUser.save();
const token=createToken(user._id)
res.json({success:true,token})
} catch (error) {
  console.log(error);
  res.json({success:false,message:error.message})
}
}
//Route for admin login
export const adminLogin=async(req,res)=>{
res.send('postAdmin')
}
