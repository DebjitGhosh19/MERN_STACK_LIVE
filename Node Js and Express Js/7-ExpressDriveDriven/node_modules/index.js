const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const port=3000;

app.use((req,res,next)=>{
  console.log('First middleware',req.url,req.method); 
  next(); 
})
app.use((req,res,next)=>{
  console.log('Second middleware',req.url,req.method);  
  next()
})

// app.use((req,res,next)=>{
//   res.send('<h1>Third middleware</h1>');
//   console.log("third middleware");
  
// })
app.get('/',(req,res,next)=>{
  res.send('  <h1>Wlcome to home page</h1>')
})


app.get('/contact-us',(req,res,next)=>{
  res.send(`<h1>Wlcome to Contact-us page</h1>
  <form action="/contact-us" method="post" >
    <input type="text" name="name" placeholder="Enter your name">
    <input type="email" name="email" placeholder="Enter your email">
    <input type="submit" >
  </form>`)
})
app.post('/contact-us',(req,res,next)=>{
  console.log("FirstHandeling",req.url,req.method,req.body);
  next();
})
app.use(bodyParser.urlencoded());
app.post('/contact-us',(req,res,next)=>{
  console.log("Handling/contac-us for Post",req.url,req.method,req.body);
  
  res.send('<h1>We will contact you shortly.</h1>')
})

app.listen(port,()=>{
  console.log(`Server started at http//localhost:${port}`);
})