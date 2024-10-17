const http=require('http');
console.log("Hello");
const requestHandeler=(req,res)=> {
  // console.log("world",req.url,req.method,req.headers);
  res.setHeader('Content-Type','text/html');
  res.write('<!DOCTYPE html>');
  res.write(`<html lang="en">
<head>
  <title>Document</title>
</head>
<body>
  <h1>Welcome</h1>
</body>
</html>`);
res.end();
}
const server=http.createServer(requestHandeler);
const port=3000;
server.listen(port,()=>{
  console.log(`Server Starts: http://localhost:${3000}`);
  
});