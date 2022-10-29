import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import logo from "../../images/logo.png"
const Navbar = () => {
  return (
    <>
    <ul style={{marginBottom:0}}>
        <li><img src={logo} alt="" srcset="" className='logo-img'/></li>
        <li> <NavLink className="nav-links" to="/home">Home</NavLink> </li>
        <li> <NavLink className="nav-links" to="/about">About Us</NavLink> </li>
        <li> <NavLink className="nav-links" to="/cars">Cars</NavLink> </li>
        <li> <NavLink className="nav-links" to="/services">Services</NavLink> </li>
        <li> <NavLink className="nav-links" to="/contact">Contact</NavLink> </li>
        <li> <NavLink  className="nav-btn"to="/login">Login</NavLink> </li>
        <li> <NavLink className="nav-btn" to="/register">Register</NavLink> </li>
    </ul>
    </>
  )
}

export default Navbar;