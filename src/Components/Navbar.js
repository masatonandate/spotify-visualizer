import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  const navStyle = {
    display: 'inline',
    fontSize: 20,
    marginLeft: 10
  }
  return (
    <nav>
      <Link to = "/redirect" className = "nav-link" style = {navStyle}>Visualizer</Link>
      <Link to = "/Nutrition" className = "nav-link" style = {navStyle}>Nutrition</Link>
    </nav>

  )
}

export default Navbar;