const fs=require('fs');
// External Module
const express=require('express');
const app=express();
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}))
app.get('/',(req,res,next)=>{
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <title>Hamara airbnb</title>
</head>
<body>
  <h1>Welcome to airbnb</h1>
    <a href="/add-home">Add Home</a>
</body>
</html>`)
})
app.get('/add-home',(req,res,next)=>{
  res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
  <title>Add Home</title>
</head>
<body>
  <h1>Add your Home</h1>
  <form action="/add-home" method="post">
    <input type="text" name="houseName" placeholder="Name of your house">
  </form>
</body>
</html>`)
});
app.post("/add-home",(req,res,next)=>{
  
})
app.use((req,res,next)=>{
  console.log('Request Received',req.method,req.url,req.body);
  next();
})
app.use((req,res,next)=>{
  res.statusCode=404;
    res.write(`<!DOCTYPE html>
      <html lang="en">
      <head>
        <title>Error</title>
      </head>
      <body>
        <h1>Error 404</h1>
      </body>
      </html>`)
        res.end();
})
const port=3000;
app.listen(port,()=>{
  console.log(`server starting at: http//localhost:${port}`);
  
})