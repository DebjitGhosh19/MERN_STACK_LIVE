const http = require('http');
const fs = require('fs');
http.createServer((req,res)=>{
  if(req.url === '/'){
   fs.readFile('./views/index.html',(err,data)=>{
     res.writeHead(200,{'Content-Type':'text/html'});
     res.write(data);
     res.end();
   });}
   else if(req.url === '/about'){   
    fs.readFile('./views/about.html',(err,data)=>{
      res.writeHead(200,{'Content-Type':'text/html'});
      res.write(data);
      res.end();
    }); }
    else if(req.url === '/contact'){  
      fs.readFile('./views/contact.html',(err,data)=>{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        res.end();
      });         }
    else{  
      fs.readFile('./views/404.html',(err,data)=>{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        res.end();
      });
   
  } 

}).listen(3000,()=>{
  console.log('Server running at http://localhost:3000/');
  
});