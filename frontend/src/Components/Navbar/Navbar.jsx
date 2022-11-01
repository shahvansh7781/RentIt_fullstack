import React from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./Navbar.css";
import logo from "../../images/logo.png";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const { user } = useSelector((state) => state.user)
  return (
    <>
      {isAuthenticated ? (
        <ul style={{ marginBottom: 0 }}>
          <li>
            <NavLink to="/">
              <img src={logo} alt="" srcset="" className="logo-img" />
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/about">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/cars">
              Cars
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/services">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/contact">
              Contact
            </NavLink>
          </li>
          <li>
            <DropdownButton
              id="dropdown-basic-button"
              title={`Welcome ${user.name}`}
            >
              <Dropdown.Item href="#/action-1">My Profile</Dropdown.Item>
              <Dropdown.Item href="#/action-2">My Bookings</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
            </DropdownButton>
          </li>
        </ul>
      ) : (
        <ul style={{ marginBottom: 0 }}>
          <li>
            <NavLink to="/">
              <img src={logo} alt="" srcset="" className="logo-img" />
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/about">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/cars">
              Cars
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/services">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/contact">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/login">
              <i class="fa-solid fa-user fa-lg fa-cog"></i>
            </NavLink>
          </li>
        </ul>
      )}
    </>
  );
};

export default Navbar;
