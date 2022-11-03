import React from "react";
import Navbar from "../Navbar/Navbar";
import Simpleslider from "./Slider/Slider";
import Featured from "./Featured/Featured";
import Footer from "../Footer/Footer";
import Main from "../Services/Main";
const Home = () => {
  return (
    <>
      <div style={{ backgroundColor: "#000000" }} id="top">
        <Navbar />
      </div>
      <Simpleslider />
      <Featured />
      <Main/>
      <Footer/>
    </>
  );
};

export default Home;
