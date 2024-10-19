const http=require('http');
const RequestHandelar = require('./RequestHandelar');


const server=http.createServer(RequestHandelar);
const port=3001;
server.listen(port,()=>{
  console.log(`server starting at: http//localhost:${port}`);
  
})
