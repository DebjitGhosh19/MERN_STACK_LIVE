const task1=()=>{
  return new Promise((resolve, reject) => {
    resolve("Task-1 is completed")
  })
}
const task2=()=>{
  return new Promise((resolve, reject) => {
    resolve("Task-2 is completed")
  })
}
const task3=()=>{
  return new Promise((resolve, reject) => {
    reject ("Task-3 is not completed")
  })
}
const task4=()=>{
  return new Promise((resolve,reject)=>{
    resolve("Task-4 is completed")
  })
}

const f1=async () => {
  try {
    const t1=await task1();
    console.log(t1);
 
    console.log(await task2());

    const t3=await task3()
    console.log(t3);
    
    console.log( await task4());
    
    
  } catch (error) {
    console.log(error);
    
  }
}
f1();