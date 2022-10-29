import React from "react";
import { Link } from "react-router-dom";
import rentside from "../../images/rent_side.png"
import Navbar from "../Navbar/Navbar";
import "./Landing.css"
const Landing = () => {
  return (
    <div className="all-content">
      <Navbar/>
      <div className="main-content">
        <div className="inner-content">
            <h1>Welcome to RentIT</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br /> when an unknown printer  took a galley  of type  and scrambled it to make a type <br /> specimen book. It has survived not only five centuries, but also the leap into <br /> electronic typesetting, remaining essentially unchanged. <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quam ipsa velit culpa, <br /> vero soluta voluptatum voluptatibus doloribus, laudantium assumenda deserunt <br /> vel qui nisi necessitatibus nulla nobis voluptate mollitia unde.</p>
            <Link className="mylink1" to="/home">Get Started</Link>
        </div>
        <div>
            <img src={rentside} alt="" srcset="" className="side-img" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
