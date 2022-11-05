import React from "react";
import Navbar from "../Navbar/Navbar";
import Simpleslider from "./Slider/Slider";
import Featured from "./Featured/Featured";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";
import Main from "../Services/Main";

const pagesAnimationLeft = {
 
  hidden: {
    opacity: 0,
    x: -1400, 
  },

  visible: {
    opacity: 1,
    x: 0,
    y:0,
    
    transition: { delay: 0.3, duration: 2.5, type: "spring" },
  },
};

const pagesAnimationRight = {
 
  hidden: {
    opacity: 0,
    x: 1400, 
  },

  visible: {
    opacity: 1,
    x: 0,
    y:0,
    
    transition: { delay: 0.3, duration: 2.5, type: "spring" },
  },
};

const Home = () => {
  return (
    <>
    <div >
 
        <motion.div 
          variants={pagesAnimationLeft}
          initial="hidden"
          animate="visible"
          style={{ backgroundColor: "#000000" }} id="top">
          <Navbar />
        </motion.div>
        <motion.div
           variants={pagesAnimationRight}
           initial="hidden"
           animate="visible"
          >
          <Simpleslider />
        </motion.div>
      

      <Featured />
      <Main/>
      <Footer/>
      </div>
    </>
  );
};

export default Home;
