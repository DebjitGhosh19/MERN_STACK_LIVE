const express=require('express');
const app=express();
const port=3001;

const bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/views/index.html');
});
app.get('/triangle',(req,res)=>{
    res.sendFile(__dirname+'/views/triangle.html');
}
);
app.get('/circle',(req,res)=>{
    res.sendFile(__dirname+'/views/circle.html');
}
);
app.post('/triangle',(req,res)=>{
    const base=parseFloat(req.body.base);
    const height=parseFloat(req.body.height);
    const area=0.5*base*height;
    res.send(`Area of Triangle is ${area}`);
});
app.post('/circle',(req,res)=>{
    const radius=parseFloat(req.body.radius);
    const area=Math.PI*radius*radius;
    res.send(`Area of Circle is ${area}`);
});

app.listen(port,()=>{ 
    console.log(`Server is running on http://localhost:${port}`);
});