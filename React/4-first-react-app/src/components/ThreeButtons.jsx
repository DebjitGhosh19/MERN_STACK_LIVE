import './button.css';
const ThreeButtons=({btntext,btntype,handlar})=>{

  if(btntype=="green"){
    return <button className="green" onClick={handlar}>{btntext}</button>
  }
 else if(btntype=="NO"){
    return <button className="red" onClick={handlar}>{btntext}</button>
  }else{
    return <button className="blue" onClick={handlar}>{btntext}</button>
  }
}
export default ThreeButtons;