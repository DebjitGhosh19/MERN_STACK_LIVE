const express = require("express");
const app = express();
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;
require("./config/database");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
const user = require("./models/user.model");
//Home Route
app.get("/", (req, res) => {
  res.send("Welcome");
});
//Register page
app.post("/register", async (req, res) => {
  
});
//Login page
app.post("/login", (req, res) => {
  res.send("Welcome to login page");
});
//Profile page
app.get("/profile", (req, res) => {
  res.send("Wlcome to profile page");
});

//Route not found
app.use((req, res, next) => {
  res.status(404).send("Page not found");
});
//Server Error
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

module.exports = app;
