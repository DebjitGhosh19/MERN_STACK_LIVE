const mongodb=require("mongodb");
const MongoClient=mongodb.MongoClient;
const url="mongodb+srv://Debjit:root@airbnb.0rsfw.mongodb.net/?retryWrites=true&w=majority&appName=Airbnb";
let _db;
const mongoConnect=(callback)=>{
  MongoClient.connect(url)
  .then((client)=>{
    console.log('Connected to MongoDb');
    _db=client.db("airbnb")
    callback();
  })
  .catch((err)=>{
    console.log(err);
    throw err;
  });
};
const getDb=()=>{
  if (!_db) {
    throw new Error("Database not connected");
  }
  return _db;
}
exports.mongoConnect=mongoConnect;
exports.getDb=getDb;