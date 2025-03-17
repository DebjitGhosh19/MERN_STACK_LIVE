import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  return (

    <nav>
      <ul>
        <li><NavLink to="/" >Home</NavLink></li>
        <li><NavLink to="/about" >About</NavLink></li>
        <li><NavLink to="/add-bloges" >Add Blog</NavLink></li>
        
      </ul>
    </nav>
  );
}

export default Navbar