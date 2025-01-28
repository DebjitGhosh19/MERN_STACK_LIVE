// Code: Express Server
const express = require("express");
var bodyParser = require('body-parser')
const app = express();
const port = 3000;
// app.get("/userId/:id/age/:age", (req, res) =>
//   app.get("/", (req, res) =>
//    { 
     
    // const id= req.query.id;
    // const name= req.query.name;
    // const {id,name}= req.query;
    // res.send(`Hello World!${id} ${name}`);

//  const id= req.params.id;
//     const age= req.params.age;
    // const {id,age}= req.params;


    // const {id,age}= req.headers;
    
    // res.send(`Hello World!${id} ${age}`);


    // });    
    

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.post("/user", (req, res) => {
  const { id, name } = req.body;
  res.send(`Hello World! ${id} ${name}`);
});
app.listen(port, () => {  console.log(`Server is running at http://localhost:${port}`);});
