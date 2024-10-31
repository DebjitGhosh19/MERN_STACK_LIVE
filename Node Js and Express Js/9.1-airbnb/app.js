const express=require('express');
const app=express();
const path=require('path')
const userRouter=require('./Router/user');
const hostRouter=require('./Router/host');
const rootUtils=require('./utils/utilsPath');
app.use(express.static(path.join(rootUtils,"public")))
app.use(express.urlencoded())
app.use(userRouter);
app.use('/host',hostRouter);
app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(rootUtils,"views","404.html"))
})
app.listen(3000)