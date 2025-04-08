const calMax=(numbers)=>{
  return numbers.reduce((accumulator, currentValue) =>{
    if (accumulator>currentValue) {
      return accumulator
    } else {
      return currentValue
    }
  },0)
   }  
   console.log(calMax([1,2,3,4,5,88,5,74,99]));
  