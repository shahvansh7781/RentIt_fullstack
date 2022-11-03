import React from "react";
import "./Service.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Main from "./Main";



const pagesAnimation = {
 
  hidden: {
    opacity: 0,
    x: -2100,
  },

  visible: {
    opacity: 1,
    x: 0, 
    transition: { delay: 0.15, duration: 2.5, type: "spring"},
  },
};


const Service = () => {
  return (
    <>
      <motion.div 
        variants={pagesAnimation}
        initial="hidden"
        animate="visible"

      className="service-bg">
        <div className="service-nav">
          <Navbar />
        </div>
        <div className="service-info">
          <h1>Our Services</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
            eligendi saepe nesciunt totam commodi! Ullam tenetur reprehenderit
            cum! Quae expedita unde tenetur repellat atque nihil blanditiis aut
            adipisci odit velit!
          </p>
          <Link to="/contact" className="service-button">
            Contact Us
          </Link>
        </div>
      </motion.div>
      <Main/>
      <Footer />
    </>
  );
};

export default Service;
