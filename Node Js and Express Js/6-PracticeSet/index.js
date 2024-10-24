const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("First middleware", req.url, req.method);
  next();
});
app.use((req, res, next) => {
  console.log("Second middleware", req.url, req.method);
  next();
});

// app.use((req,res,next)=>{
//   console.log('Third middleware',req.url,req.method);
//   res.send('<h1>Hello</h1>')

// })
app.get("/", (req, res, next) => {
  res.send("<h1>Welcome to Home Page</h1>");
  next();
});
app.get("/contact-us", (req, res, next) => {
  res.send(` 
    <h1>Plese Enter Your Details</h1>
     <form action="/contact-us" method="post">
  <input type="text" name="Name" placeholder="Enter your name">
  <input type="email" name="Email" placeholder="Enter your mailid">
  <input type="submit" >
</form>`);
});
app.post('/contact-us',(req,res,next)=>{
  res.send(` <h1>We will contact you soon</h1>`)
})
app.listen(3000);
