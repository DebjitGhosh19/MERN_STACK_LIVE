const promis1=new Promise((resolve, reject) => {
  let completed=true;
  if (completed) {
    resolve('ok')
  } else {
    reject('No')
  }
})
promis1.then((res)=>{
  console.log(res);
  
}).catch((err)=>{
  console.log(err);
  
})