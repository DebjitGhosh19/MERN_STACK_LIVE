const express = require("express");
const app = express();
const path = require("path");
const userRouter = require("./Router/store");
const { hostRouter } = require("./Router/host");
const rootUtils = require("./utils/utilsPath");
const errorController = require("./controllers/errorController");
const mongoose = require("mongoose");
const { authRouter } = require("./Router/authRouter");
const session = require("express-session");
const MongoDB_session=require('connect-mongodb-session');

const MongoDBStore= MongoDB_session(session);
const Mongo_Db_url =
  "mongodb+srv://root:root@kg.bqm0b.mongodb.net/airbnb?retryWrites=true&w=majority&appName=kg";
  const sessionStore=new MongoDBStore({
    uri:Mongo_Db_url,
    collection:'sessions',
  })
  
app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(rootUtils, "public")));
app.use(express.urlencoded());
app.use(
  session({
    secret: "MERN LIVE BATCH",
    resave: false,
    saveUninitialized: true,
    store:sessionStore,
  })
);

app.use(userRouter);
app.use("/host", (req, res, next) => {
  if (!req.session.isLoggedIn) {
    return res.redirect("/login");
  }
  next();
});
app.use("/host", hostRouter);
app.use(authRouter);

app.use(errorController.get404);

const PORT = 3000;
mongoose.connect(Mongo_Db_url).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}`);
  });
});
