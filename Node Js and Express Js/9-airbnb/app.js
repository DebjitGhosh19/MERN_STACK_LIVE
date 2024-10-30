const express=require('express');
const app=express();
const userRouter=require("./routes/userRouter");
const hostRouter=require("./routes/hostRouter");

app.use(express.urlencoded());
app.use(userRouter);
app.use("/host",hostRouter);
app.use((req,res,next)=>{
res.status(404).send(`<h1>Page not foud</h1>`)
});
app.listen(3000);