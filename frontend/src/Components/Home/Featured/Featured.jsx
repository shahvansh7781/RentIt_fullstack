import React from "react";
import "./Featured.css";
import { Card } from "antd";
import { Link } from "react-router-dom";
import Slider from "react-slick";
const Featured = () => {
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
      <div style={{ backgroundColor: "#f8f9fa" }}>
        <div
          style={{
            textAlign: "center",
            marginTop: "3vmax",
            paddingTop: "40px",
          }}
        >
          <h4 style={{ color: "#3591ca" }}>What We Offer</h4>
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
                <div className="card-div">
                  <div>
                    <h5 className="card-div-h5">Tata Nexon</h5>
                    <h5 className="card-div-h5">₹700/hr</h5>
                  </div>
                  <div className="card-div2">
                    <Link className="card-button">Details</Link>
                  </div>
                </div>
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
                <div className="card-div">
                  <div>
                    <h5 className="card-div-h5">Tata Nexon</h5>
                    <h5 className="card-div-h5">₹700/hr</h5>
                  </div>
                  <div className="card-div2">
                    <Link className="card-button">Details</Link>
                  </div>
                </div>
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
                <div className="card-div">
                  <div>
                    <h5 className="card-div-h5">Tata Nexon</h5>
                    <h5 className="card-div-h5">₹700/hr</h5>
                  </div>
                  <div className="card-div2">
                    <Link className="card-button">Details</Link>
                  </div>
                </div>
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
                <div className="card-div">
                  <div>
                    <h5 className="card-div-h5">Tata Nexon</h5>
                    <h5 className="card-div-h5">₹700/hr</h5>
                  </div>
                  <div className="card-div2">
                    <Link className="card-button">Details</Link>
                  </div>
                </div>
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
                <div className="card-div">
                  <div>
                    <h5 className="card-div-h5">Tata Nexon</h5>
                    <h5 className="card-div-h5">₹700/hr</h5>
                  </div>
                  <div className="card-div2">
                    <Link className="card-button">Details</Link>
                  </div>
                </div>
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
                <div className="card-div">
                  <div>
                    <h5 className="card-div-h5">Tata Nexon</h5>
                    <h5 className="card-div-h5">₹700/hr</h5>
                  </div>
                  <div className="card-div2">
                    <Link className="card-button">Details</Link>
                  </div>
                </div>
              </Card>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Featured;
