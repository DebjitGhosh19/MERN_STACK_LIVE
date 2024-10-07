
const Button=({btnText,btnType,handlar})=>{

  if (btnType=='success') {
    return <button className="btn btn-success button" onClick={handlar}>{btnText}</button>
  }
  else if (btnType=='danger') {
    return <button className="btn btn-danger button" onClick={handlar}>{btnText}</button>
  }  else {
    return <button className="btn btn-secondary button" onClick={handlar}>{btnText}</button>
  }
}
export default Button;
