const express=require('express');
const app=express();
const path=require('path')
const userRouter=require('./Router/store');
const {hostRouter}=require('./Router/host');
const rootUtils=require('./utils/utilsPath');
const errorController=require('./controllers/errorController')
app.set('view engine','ejs');
app.set('views', 'views')
app.use(express.static(path.join(rootUtils,"public")))
app.use(express.urlencoded())
app.use(userRouter);
app.use('/host',hostRouter);
const airbnbDb=require('./utils/Database-utils');
airbnbDb.execute("SELECT * FROM homes").then(([rows,fields])=>{
  console.log(rows);
  
})
app.use(errorController.get404)
app.listen(3000)