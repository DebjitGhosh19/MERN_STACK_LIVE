const express=require('express');
const app=express();
const port=3000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// public
app.use(express.static('public'));

const userRouer=require('./Router/user.router');
app.use('/',userRouer);



app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
});