import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectDb from './config/mongodb.js'
import cloudinaryConnection from './config/cloudinary.js'
import userRouter from './routes/userRouter.js'
// App config
const app = express()
const port=process.env.PORT||4000;
connectDb()
cloudinaryConnection()

 // Middlewares
app.use(express.json());
app.use(cors());
app.use('/api/user',userRouter);

//Api endpoints
app.get('/', (req, res) => {
  res.send('Hello world')
})

app.listen(port,()=>{
  console.log(`Server is running at http://localhost:${port}`);

})