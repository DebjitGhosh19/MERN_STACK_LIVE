const task1=()=>{
  return new Promise((resolve, reject) => {
    // resolve("Complete")
    reject("no")
  })
}

const f1=async () => {
try {
  const t1=await task1();
  console.log(t1);
  
} catch (error) {
  console.log(error);
  
}
  
}
f1();