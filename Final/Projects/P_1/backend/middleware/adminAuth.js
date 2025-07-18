import jwt from 'jsonwebtoken'

const adminAuth=async (req,res,next) => {
  try {
    const {token}=req.headers;
  if (!token) {
    return res.json({success:false,message:"Not authorized login again"})
  }
  const token_decode=jwt.verify(token,process.env.JWT_SECRATE);
  if(token_decode!==process.env.ADMINEMAIL+process.env.ADMINPASSWORD){
   return res.json({success:false,message:"Not authorized login again"})
  }
  next()
  } catch (error) {
    console.log(error);
    res.json({success:false,message:error.message})
  }
}
export default adminAuth