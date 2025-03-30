const registerUser=async(req,res)=>{
try {
const {name,email,password,dob}=req.body;
const newUser={
name,email,password,dob
}
res.send(newUser)
} catch (error) {
console.log(error);
}
}
module.exports={registerUser};