import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>
        <NavLink to="/bloges" className="nav-link">Bloges</NavLink>
        <NavLink to="/contact" className="nav-link">Contact</NavLink>
      </nav>
    </>
  )
}

export default Navbar