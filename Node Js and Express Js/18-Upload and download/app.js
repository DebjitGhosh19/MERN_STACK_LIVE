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
const mongodb_session=require('connect-mongodb-session');
const multer=require('multer')

const MongoDBStore= mongodb_session(session);
const MONGO_DB_URL =
  "mongodb+srv://root:root@kg.bqm0b.mongodb.net/airbnb?retryWrites=true&w=majority&appName=kg";
  const sessionStore=new MongoDBStore({
    uri:MONGO_DB_URL,
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
mongoose.connect(MONGO_DB_URL).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}`);
  });
});
