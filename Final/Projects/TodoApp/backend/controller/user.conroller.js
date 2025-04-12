import errorMap from "zod/locales/en.js";
import User from "../model/user.model.js"
import bcrypt from "bcrypt";
import { z } from "zod";
import { generateTokenAndSaveInCookies } from "../jwt/token.js";
//validation code start here
const UserSchema = z.object({
  username: z.string().min(3,{message:"Username at lest 3 characters long"}).max(32,{message:"Username not longer than 32 characters "}),
  email:z.string().email({message:"Invalid email addresss"}),
  password:z.string().min(8,{message:"Password must be at least 8 characters long."})
});

//validation code end here

export const register=async(req,res)=>{
  try {
    const {email,password,username}=req.body;
    if(!email||!username||!password){
      return res.status(400).json({
        message:"All fields are required"
      })
    }

 const validation=UserSchema.safeParse({email,username,password})
 if (!validation.success) {
 const errMessage=validation.error.errors.map(err=>err.message)
  return res.status(400).json({errors:errMessage})
 }
 

  const user=await User.findOne({email})
  if (user) {
    res.status(401).send("User is already exist")
  }
  const hashPassword =  bcrypt.hashSync(password, 10);
  const newUser=new User({email,password:hashPassword,username})
  await newUser.save()
  if (newUser) {
  const token= await generateTokenAndSaveInCookies(newUser._id,res)
    res.status(201).json({message:"User Signin successfully",newUser,token})
  }
  } catch (error) {
    res.status(404).json({
      message:"Error occure in registration",
      newUser
    })
  }
}
export const login=async(req,res)=>{
  const {email,password}=req.body;
  try {
    if (!email||!password) {
      return res.status(400).json({
        message:"All fields are required"
      })
    }
    const user=await User.findOne({email}).select("+password")
    if (!user||!(bcrypt.compareSync(password,user.password))) {
      res.status(404).json({
        message:"Invalid email or password",
      })
    }
    const token= await generateTokenAndSaveInCookies(user._id,res)
    res.status(200).json({message:"User is successfully login",user,token});
  } catch (error) {
    res.status(404).json({
      message:"Error occure in login",
    })
  }
}
export const logout=(req,res)=>{
try {
  res.clearCookie("jwt",{
    path:"/",

  })
  res.status(200).json({
    message:"User is successfully logout",
  })
} catch (error) {
  res.status(404).json({
    message:"Error occure in logout",
  })
}
}