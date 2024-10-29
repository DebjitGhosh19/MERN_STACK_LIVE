const http=require('http');
const RequestHandelar = require('./RequestHandelar');

const arr=[5,8,7,9,13];
for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  console.log(element);
  
}
const server=http.createServer(RequestHandelar);
const port=3000;
server.listen(port,()=>{
  console.log(`server starting at: http//localhost:${port}`);
  
})
