const http=require('http');
const handelar=(req,res)=>{
console.log(req.methods,req.url,req.headers);
if(req.url===('/')){
  res.write(`<!DOCTYPE html>
    <html lang="en">
    <head>
      <title>Myntra</title>
    </head>
    <body>
      <ol type="A">
        <li><a href="/home"> Home</a></li>
        <li><a href="/men"> Men</a></li>
        <li><a href="/women"> Women</a></li>
        <li><a href="/kids"> Kids</a></li>
        <li><a href="/cart"> Cart</a></li>
      </ol>
    </body>
    </html>`);
}
else if(req.url==='/home'){
  res.write(`<h1>Wlocome To Home Page</h1>`);
}
else if(req.url==='/men'){
  res.write(`<h1>Wlocome To  Men Page</h1>`);
}else if(req.url==='/women'){
  res.write(`<h1>Wlocome To Women Page</h1>`);
}else if(req.url==='/kids'){
  res.write(`<h1>Wlocome To kids Page</h1>`);
}
else if(req.url==='/cart'){
  res.write(`<h1>Wlocome To Cart Page</h1>`);
}
res.end();
}
const server=http.createServer(handelar);
const port=3000;
server.listen(port,()=>{
  console.log(`Server sared at ${port}`);
})