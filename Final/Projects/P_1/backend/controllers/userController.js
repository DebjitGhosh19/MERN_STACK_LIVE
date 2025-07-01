import userModel from "../models/userModel.js";
import validator from 'validator'
//Route for user login
export const loginUser=async(req,res)=>{
res.send('postLogin')
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
} catch (error) {
  
}
}
//Route for admin login
export const adminLogin=async(req,res)=>{
res.send('postAdmin')
}
