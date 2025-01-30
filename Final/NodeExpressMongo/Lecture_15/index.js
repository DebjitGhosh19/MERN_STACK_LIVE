const express=require('express');
const app=express();
const port=3001;
// app.use(express.json());  
app.use(express.urlencoded({extended:true}));
const userRouter=require('./Rourtes/User.route');
app.use(userRouter);

app.listen(port,()=>{
    console.log(`Server is running on port http://localhost:${port}`);
});