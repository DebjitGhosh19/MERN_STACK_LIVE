const arrayFun=(numbers)=>{
  return numbers.filter(num=>{
    for (let index = 0; index < num; index++) {
      if (num%2==0) {
        return false
      }  
    }
    return num>1
  })
 }
 
 console.log(arrayFun([1,2,3,4,5,11]));