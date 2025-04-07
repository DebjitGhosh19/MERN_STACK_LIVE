const calMax=(numbers)=>{
  return numbers.reduce((accumulator, currentValue) =>accumulator>currentValue?accumulator:currentValue,0)
    
   }
   
   console.log(calMax([1,2,3,4,5,88,5,74,99]));
  