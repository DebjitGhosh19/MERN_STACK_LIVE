const calSum=(numbers)=>{
return numbers.reduce((accumulator, currentValue) => {
  const sum= accumulator+currentValue
  return sum
  }, 0);
 }
 
 console.log(calSum([1,2,3,4,5,88,5,74]));
