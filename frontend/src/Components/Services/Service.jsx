import React from "react";
import "./Service.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import Main from "./Main";
const Service = () => {
  return (
    <>
      <div className="service-bg">
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
      </div>
      <Main/>
      <Footer />
    </>
  );
};

export default Service;
