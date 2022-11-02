import React from "react";
import Navbar from "../Navbar/Navbar";
import Simpleslider from "./Slider/Slider";
import Featured from "./Featured/Featured";
import Footer from "../Footer/Footer";
const Home = () => {
  return (
    <>
      <div style={{ backgroundColor: "#000000" }} id="top">
        <Navbar />
      </div>
      <Simpleslider />
      <Featured />
      <Footer/>
    </>
  );
};

export default Home;
