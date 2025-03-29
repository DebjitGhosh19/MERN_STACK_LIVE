const express=require("express")
const multer=require("multer")
const app= express();
const PORT=3000;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    const name = Date.now() + '-' +file.originalname
    cb(null, name)
  }
})

const upload = multer({ storage: storage })


app.get("/",(req,res)=>{
res.send("Wlcome")
})

app.get("/register",(req,res)=>{
  res.sendFile(__dirname+"/index.html")
  })

  app.post("/register", upload.single('image'),(req,res)=>{
    res.send(`File is uploaded successfully`)
    })









app.listen(PORT,(error)=>{
  console.log(`Server is running at http://localhost:${PORT}`);
  
})