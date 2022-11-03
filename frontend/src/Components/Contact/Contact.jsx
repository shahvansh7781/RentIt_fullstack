import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";
import "./Contact.css";

// import { ToastContainer,toast } from 'react-toastify';

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
    
    transition: { delay: 0.3, duration: 2, type: "spring"},
  },
};


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p4es96r",
        "template_l5jc2jf",
        e.target,
        "Y5EiWZzcTKeqDVo0F"
      )

      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <motion.div
        variants={pagesAnimation}
        initial="hidden"
        animate="visible"
        className="contact-section">
      <div
        className="contact-bg">
        <div className="contact-nav">
          <Navbar />
        </div>
        <div className="contact-intro">
          <h3>Get in Touch with Us</h3>
          <h2>contact us</h2>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
            iste facilis quos impedit fuga nobis modi debitis laboriosam velit
            reiciendis quisquam alias corporis, maxime enim, optio ab dolorum
            sequi qui.
          </p>
        </div>
      </div>

      <div className="contact-body">
        <div className="contact-info">
          <div>
            <span>
              <i className="fas fa-mobile-alt"></i>
            </span>
            <span>Phone No.</span>
            <span className="text">+91 9876789800</span>
          </div>

          <div>
            <span>
              <i className="fas fa-envelope-open"></i>
            </span>
            <span>E-mail</span>
            <span className="text">
              <a className="fas-mail" href="mailto:rentit7.com@gmail.com">
                rentit7.com@gmail.com
              </a>
            </span>
          </div>

          <div>
            <span>
              <i className="fas fa-map-marker-alt"></i>
            </span>
            <span>Address</span>
            <span className="text">390001 , Kalabhavan , Vadodara</span>
          </div>
        </div>

        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <div className="contact-form-div">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder=" Your Name"
                required
                // onChange={handleInputChange}
              />
            </div>

            <div className="contact-form-div">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder=" Your Email"
                // onChange={handleInputChange}
              />
            </div>

            <div className="contact-form-div">
              <input
                type="text"
                name="subject"
                className="form-control"
                placeholder=" Subject"
                // onChange={handleInputChange}
              />
            </div>

            <div class="contact-form-div">
              <textarea
                placeholder="  Message"
                name="message"
                className="form-area"
                // onChange={handleInputChange}
              ></textarea>
            </div>

            <div>
              <button type="submit" className="send-btn">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Map Map */}
      {/* <MapC /> */}
      <div className="map">
        <h1>Map</h1>
      </div>

      <Footer />
    </motion.div>
  );
};

export default Contact;
