import React from "react";
import Navbar from "../Navbar/Navbar";
import Simpleslider from "./Slider/Slider";
import Featured from "./Featured/Featured";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";

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
    
    transition: { delay: 0.3, duration: 2, type: "spring" },
  },
};



import Main from "../Services/Main";
const Home = () => {
  return (
    <>
    <div >
      <motion.div variants={pagesAnimation}
        initial="hidden"
        animate="visible">    
        <div style={{ backgroundColor: "#000000" }} id="top">
          <Navbar />
        </div>
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
