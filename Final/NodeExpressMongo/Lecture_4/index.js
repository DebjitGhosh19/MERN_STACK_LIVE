const http=require('http');
const server=http.createServer((req,res)=>{
  res.writeHead(200,{"content-type":"text/html"});
  res.write("<h1>Hello World</h1>");
  res.end();
  })
  server.listen(3000,()=>{
    console.log("Server is running on port 3000");
  })