const fs=require('fs');
// External Module
const express=require('express');
const app=express();
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded())
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