import React from 'react'


const Card = ({title,description}) => {
  return (
    <>
 <div className="card" style={{width: "18rem", display:"inline-block", margin:"45px"}}>
 <img className="card-img-top" src="images/1.jpg" alt="" />
 <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
 </div>
    </>
  )
}

export default Card