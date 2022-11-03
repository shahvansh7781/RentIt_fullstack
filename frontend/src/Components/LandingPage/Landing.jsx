import React from "react";
import { Link } from "react-router-dom";
import rentside from "../../images/rent_side.png"
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";
import "./Landing.css"


const pagesAnimation = {
  hidden: {
    opacity: 0,
    x: -1400, 
    y:-900
  },

  visible: {
    opacity: 1,
    x: 0,
    y:0,
    rotate:360,
    transition: { delay: 0.3, duration: 4, type: "spring" },
  },
};


const Landing = () => {
  return (
    <motion.div 
      variants={pagesAnimation}
      initial="hidden"
      animate="visible"
      className="all-content">
      <Navbar/>
      <div className="main-content">
        <div className="inner-content">
            <h1>Welcome to <span style={{color:"#3591ca", fontFamily: "Poppins"}}> RentIT </span></h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br /> when an unknown printer  took a galley  of type  and scrambled it to make a type <br /> specimen book. It has survived not only five centuries, but also the leap into <br /> electronic typesetting, remaining essentially unchanged. <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quam ipsa velit culpa, <br /> vero soluta voluptatum voluptatibus doloribus, laudantium assumenda deserunt <br /> vel qui nisi necessitatibus nulla nobis voluptate mollitia unde.</p>
            <Link className="mylink1" to="/home">Get Started</Link>
        </div>
        <div>
            <img src={rentside} alt="" srcset="" className="side-img" />
        </div>
      </div>
    </motion.div>
  );
};

export default Landing;
