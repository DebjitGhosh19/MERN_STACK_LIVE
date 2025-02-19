const task1=()=>{
  return new Promise((resolve, reject) => {
    reject("Task1 not completed")
  })
}
const task2=()=>{
  return new Promise((resolve, reject) => {
    resolve('Task2 Complete')
  })
}
const task3=()=>{
  return new Promise((resolve, reject) => {
    resolve('Task3 complte')
  })
}
task1().then((res)=>{
  console.log(res);
}).then(task2).then((res)=>{
  console.log(res);
}).then(task3).then((res)=>{
  console.log(res);
  
})
.catch((err)=>{
  console.log(err);
  
})