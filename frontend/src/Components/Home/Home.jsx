import React from "react";
import Navbar from "../Navbar/Navbar";
import Simpleslider from "./Slider/Slider";
import Featured from "./Featured/Featured";
const Home = () => {
  return (
    <>
      <div style={{ backgroundColor: "#000000" }} id="top">
        <Navbar />
      </div>
      <Simpleslider />
      <Featured />
    </>
  );
};

export default Home;
