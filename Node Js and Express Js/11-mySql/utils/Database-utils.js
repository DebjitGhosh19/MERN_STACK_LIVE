const mysql=require('mysql2');
const poll=mysql.createPool({
  host:'localhost',
  user:'root',
  password:'Dg@712407',
  database:'airbnb'
})
module.exports=poll.promise();