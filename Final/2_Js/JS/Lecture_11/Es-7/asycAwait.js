

const task1=()=>{
  return new Promise((resolve, reject) => {
    resolve("Task 1 complete");
  })
}
const task2=()=>{
  return new Promise((resolve, reject) => {
    reject("Task 2  not complete")
  })
}
const task3=()=>{
  return new Promise((resolve, reject) => {
    resolve("Task 3 complete")
  })
}

const fun1=async () => {
 try {
  const t1=await task1()
 console.log(t1);
 const t2=await task2()
 console.log(t2);
 const t3=await task3()
 console.log(t3);
 } catch (error) {
  console.log(error);
  
 }
}
fun1()