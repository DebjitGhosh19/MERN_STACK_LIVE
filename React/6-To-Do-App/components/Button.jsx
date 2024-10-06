const Button=({btnText,btnType})=>{

  if (btnType=='success') {
    return <button className="btn btn-success button">{btnText}</button>
  }
  else if (btnType=='danger') {
    return <button className="btn btn-danger button">{btnText}</button>
  }  else {
    return <button className="btn btn-secondary button">{btnText}</button>
  }
}
export default Button;