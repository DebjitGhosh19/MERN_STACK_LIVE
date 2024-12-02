const mongodb=require('mongodb');
const MongoClient=mongodb.MongoClient;
const url="mongodb+srv://root:root@kg.bqm0b.mongodb.net/?retryWrites=true&w=majority&appName=kg";
let _db;
const mongoConnect=(callback)=>{
MongoClient.connect(url)
.then((client)=>{
  console.log("connected to mongodb",client);
  _db=client.db("airbnb");
  callback();
})
.catch((error)=>{
  console.log("Error came while connecting mongo",error);
});
};
const getDb=()=>{
  if (!_db) {
    throw new Error('Could not connect to Db');
  }
  return _db;
}

exports.mongoConnect=mongoConnect;
exports.getDb=getDb;