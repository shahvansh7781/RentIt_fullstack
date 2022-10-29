import React from "react";
import Carousel from "react-bootstrap/Carousel";
import car1 from "file:///C:/Users/SVI/Downloads/Temp-1920x850%20(2).png";
import car2 from "file:///C:/Users/SVI/Downloads/car2.png";
import car3 from "file:///C:/Users/SVI/Downloads/fcar3.png";

const Simpleslider = () => {
  return (
    <>
      <Carousel style={{ backgroundColor: "#000000" }}>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={car1} alt="First slide" />

          <Carousel.Caption
            style={{
              top: "50%",
              transform: "translate(-50%,-45%)",
              left: "50%",
              postion: "absolute",
              bottom: "auto",
              right: "auto",
            }}
          >
            <h2 style={{ fontWeight: "bolder", fontSize: "50px" }}>
              #1 Car Rent Service In Your City
            </h2>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <button
              style={{
                borderRadius: "8px",
                color: "#EEEEEE",
                fontSize: "22px",
                padding: "15px 30px",
                backgroundColor: "#00ADB5",
                textDecoration: "none",
              }}
            >
              Book Now
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="d-block w-100" src={car2} alt="Second slide" />
          <Carousel.Caption
            style={{
              top: "50%",
              transform: "translate(-50%,-45%)",
              left: "50%",
              postion: "absolute",
              bottom: "auto",
              right: "auto",
            }}
          >
            <h2 style={{ fontWeight: "bolder", fontSize: "50px" }}>
              Quality Cars with Unlimited Miles
            </h2>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <button
              style={{
                borderRadius: "8px",
                color: "#EEEEEE",
                fontSize: "22px",
                padding: "15px 30px",
                backgroundColor: "#00ADB5",
                textDecoration: "none",
              }}
            >
              Book Now
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={car3} alt="Third slide" />
          <Carousel.Caption
            style={{
              top: "50%",
              transform: "translate(-50%,-45%)",
              left: "50%",
              postion: "absolute",
              bottom: "auto",
              right: "auto",
            }}
          >
            <h2 style={{ fontWeight: "bolder", fontSize: "50px" }}>
              24/7 Customer Support Guarantee
            </h2>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <button
              style={{
                borderRadius: "8px",
                color: "#EEEEEE",
                fontSize: "22px",
                padding: "15px 30px",
                backgroundColor: "#00ADB5",
                textDecoration: "none",
              }}
            >
              Book Now
            </button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Simpleslider;
