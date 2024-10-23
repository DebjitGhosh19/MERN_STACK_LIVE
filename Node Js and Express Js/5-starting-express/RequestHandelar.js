const fs=require('fs')
const RequestHandelar=(req,res)=>{
  console.log(req.url,req.headers,req.method);
  //res.setHeader('Content-Type','text/html');
  
  if(req.url==="/"){
    res.write(`<!DOCTYPE html>
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
  </html>`);
  res.statusCode=302;
  res.setHeader('Location','/products');
  }
  else if(req.url==="/bye-product"){
    const arr=[];
  req.on('data',(chunk)=>{
    console.log(chunk);
   arr.push(chunk);  
  })
  req.on('end',()=>{
    const body=Buffer.concat(arr).toString();
    // console.log(body);
    const params=new URLSearchParams(body);
    const bodyobj={};
    for(const [key,value] of params.entries()){
      bodyobj[key]=value;
       
    }
    fs.writeFileSync('bye.txt',JSON.stringify(bodyobj),(err)=>{
      res.statusCode=302;
      res.setHeader('Location','/products');
      res.end();
    });
  })
  
  

  
  }
  else if(req.url==="/products"){
    res.write(`<!DOCTYPE html>
      <html lang="en">
      <head>
        <title>Product</title>
      </head>
      <body>
        <h1>Product Lists</h1>
      </body>
      </html>`)
      res.end();
  }
  else{
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
  }
 
  }
  module.exports=RequestHandelar;