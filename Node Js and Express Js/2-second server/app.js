const http=require('http');
const fs=require('fs');
const { log } = require('console');
const handlaer=(req,res)=>{
  console.log(req.url,req.method);  
  res.setHeader("Conten-Type","text/html")
  if (req.url==="/") {
    res.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <title>Home</title>
</head>
<body>
<h1>Welcome</h1>
 <form action="/buy-product" method="POST">
  <input type="text" placeholder="Ener the product that you want to bye" name="Product">
   <input type="text" placeholder="Ener the budget" name="budget">
  <input type="submit">
 </form>
</body>
</html>`)
  }
  else if(req.url==="/buy-product"){
    console.log("Bye Product");
    const arr=[];
    req.on('data',(chunk)=>{
      console.log(chunk);
      arr.push(chunk);
    })
    req.on('end',()=>{
      const body=Buffer.concat(arr).toString();
      console.log(body);
      
    })
    fs.writeFileSync('Buy.txt','Flipkat')
    res.statusCode=302;
    res.setHeader("Location","/products");
    console.log('sending response');
    
  }
else if(req.url==="/products"){
  res.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <title>Product</title>
</head>
<body>
  <h1>Products List</h1>
</body>
</html>`)
}
else{
  res.statusCode=404;
  res.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <title>Error</title>
</head>
<body>
  <h1>404 Error</h1>
</body>
</html>`)

}
res.end();
}

const server=http.createServer(handlaer);
const port=3000;
server.listen(port,()=>{
  console.log(`Server started at:${port}`);
});

