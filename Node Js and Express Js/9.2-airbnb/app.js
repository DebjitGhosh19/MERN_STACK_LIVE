const express=require('express');
const app=express();
const path=require('path')
const userRouter=require('./Router/store');
const {hostRouter}=require('./Router/host');
const rootUtils=require('./utils/utilsPath');
app.set('view engine','ejs');
app.set('views', 'views')
app.use(express.static(path.join(rootUtils,"public")))
app.use(express.urlencoded())
app.use(userRouter);
app.use('/host',hostRouter);
app.use((req,res,next)=>{
  res.status(404).render("404",{pagetitle:"page not found"})
})
app.listen(3000)