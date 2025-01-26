const fs=require('fs');
// console.log(fs);
fs.writeFileSync('hello.txt','Hello World');
fs.rename('hello.txt','helloWorld.txt',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('file renamed');
    }
});
