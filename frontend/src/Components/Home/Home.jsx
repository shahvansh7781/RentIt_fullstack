import React from "react";
import Navbar from "../Navbar/Navbar";
import Simpleslider from "./Slider/Slider";
import Slider from "react-slick";
import "./Home.css";
import { Card } from "antd";
const { Meta } = Card;
const Home = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <>
      <div style={{ backgroundColor: "#000000" }}>
        <Navbar />
      </div>
      <Simpleslider />
      <div style={{backgroundColor:"#f8f9fa"}}>
        <div style={{ textAlign: "center", marginTop: "3vmax",paddingTop:"40px" }}>
          <h4 style={{ color: "#03a8b0" }}>What We Offer</h4>
          <h1>Featured Vehicles</h1>
        </div>
        <div className="slider-div">
          <Slider {...settings} className="my-slider">
            <div>
              <Card
                hoverable
                className="card-styles"
                cover={
                  <img
                    alt="example"
                    src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  />
                }
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </div>
            <div>
              <Card
                hoverable
                className="card-styles"
                cover={
                  <img
                    alt="example"
                    src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  />
                }
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </div>
            <div>
              <Card
                hoverable
                className="card-styles"
                cover={
                  <img
                    alt="example"
                    src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  />
                }
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </div>
            <div>
              <Card
                hoverable
                className="card-styles"
                cover={
                  <img
                    alt="example"
                    src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  />
                }
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </div>
            <div>
              <Card
                hoverable
                className="card-styles"
                cover={
                  <img
                    alt="example"
                    src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  />
                }
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </div>
            <div>
              <Card
                hoverable
                className="card-styles"
                cover={
                  <img
                    alt="example"
                    src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  />
                }
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Home;
