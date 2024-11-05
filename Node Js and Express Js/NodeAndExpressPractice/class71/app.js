const express=require('express');
const app=express();
const {userRouter}=require('./Router/userRouter')
const {hostrouter}=require('./Router/hostRouter')
app.use(userRouter);
app.use(hostrouter);

app.use((req,res,next)=>{
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Error</title>
</head>
<body>
  <h1>Page not found</h1>
</body>
</html>`)
})

const port=3001;
app.listen(port,()=>{
  console.log(`localhostrunning on `,{port});  
})