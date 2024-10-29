const fs=require('fs');
const {URLSearchParams}=require('url')
// External Module
const express=require('express');
const app=express();

app.use((req,res,next)=>{
  console.log('Request Received',req.method,req.url);
  next();
})
app.get("/",(req,res,next)=>{
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <title>Home</title>
  </head>
  <body>
    <h1>Hello</h1>
    <form action="/bye-product" method="post">
      <input type="text" placeholder="Enter Product Name" name="Product">
      <input type="text" placeholder="Enter Price" name="price">
      <input type="submit">
    </form>
  </body>
  </html>`)
})
app.post("/bye-product",(req,res,next)=>{
  console.log('From Data Received');
  
  const arr=[];
  req.on('data',(chunk)=>{
    console.log(chunk);
   arr.push(chunk);  
  })
  req.on('end',()=>{
    const body=Buffer.concat(arr).toString();
    const params=new URLSearchParams(body);
    const bodyobj={};
    for(const [key,value] of params.entries()){
      bodyobj[key]=value;
       
    }
    console.log(JSON.stringify(bodyobj));
    
    fs.writeFile('bye.txt',JSON.stringify(bodyobj),(err)=>{
      res.statusCode=302;
      res.setHeader('Location','/products');
      res.end();
  console.log('Sending Response');
  
    });
  })
  // res.send('<h1>Ok</h1>')
})
app.get("/products",(req,res,next)=>{
  res.send(`<!DOCTYPE html>
      <html lang="en">
      <head>
        <title>Product</title>
      </head>
      <body>
        <h1>Product Lists</h1>
      </body>
      </html>`)
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
