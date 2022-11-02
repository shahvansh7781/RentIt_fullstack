import React from "react";
import "./Footer.css"
const Footer = () => {
  return (
    <>
      <div
        className="footer-div"
      >
        <div className="footer-child-div">
          <div style={{fontSize:"2.2vmax"}}>RentIT</div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Quas
            doloremque voluptatibus, consectetur aperiam nobis <br /> autem explicabo
            laboriosam commodi, placeat, <br /> libero repudiandae odio harum sit id!
          </div>
          <div style={{display:"flex",gap:"1.5rem"}}>
            <i class="fa-brands fa-instagram fa-lg"></i>
            <i class="fa-brands fa-facebook fa-lg"></i>
            <i class="fa-brands fa-twitter fa-lg"></i>
          </div>
        </div>
        <div className="footer-child-div">
          <div style={{fontSize:"1.5vmax"}}>Information</div>
          <div>About</div>
          <div>Services</div>
          <div>Terms & Conditions</div>
          <div>Best Price Guarantee</div>
          <div>Privacy & Cookies Policy</div>
        </div>
        <div className="footer-child-div">
          <div style={{fontSize:"1.5vmax"}}>Customer Support</div>
          <div>FAQs</div>
          <div>Payment Option</div>
          <div>Booking Tips</div>
          <div>How It Works</div>
          <div>Contact Us</div>
        </div>
        <div className="footer-child-div">
          <div style={{fontSize:"1.5vmax"}}>Have a Questions?</div>
          <div>203 Fake St. Mountain View, <br /> San Francisco, California, USA</div>
          <div>+2 392 3929 210</div>
          <div> info@yourdomain.com</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
