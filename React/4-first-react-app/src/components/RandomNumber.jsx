const RandomNumber=()=>{
  const number=Math.round(Math.random()*100+1);
  return <p>
    Random Number Are:{number}
  </p>
}
export default RandomNumber;