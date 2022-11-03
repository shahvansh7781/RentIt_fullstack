import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";
import "./Contact.css";

// import { ToastContainer,toast } from 'react-toastify';


// const infoAnimation={
  
//   hidden:{

//     opacity:0,
//     scale: 0.6  
//   },
//   visible:{

//     opacity:1,
//     scale: 1,
//     transition:{
//       duration: 5,
//       ease: [0, 0.71, 0.2, 1.01],
//     scale:{
//       type: "spring",
//       damping: 4,
//       stiffness: 50,
//       restDelta: 0.002},
//     // ease: [0, 0.71, 0.2, 1.01],
//     duration:5}
//   },
//   transition:{  }
// }


const infoAnimation={
  
  hidden:{

    opacity:0,
    scale: 0.6  
  },
  visible:{
    opacity:1,
    scale:1,
    transition:{type:"spring",duration:4,bounce:.3}
   
  }
}


const textAnimation={

  hidden:{
    y:400,opacity:0
  },
  visible:{
    y:0,
    x:0,
    opacity:1,
    transition:{type:"spring",  
        bounce:0.4,
        duration:6
    }
  }
}

const mapAnimation={

  hidden:{
    opacity:0,
    scale:0.7
  },
  visible:{
    x:0,
    scale:1,
    opacity:1,
    transition:{type:"tween",  
        // bounce:0.4,
        duration:3.5
    }
  }

}


const pagesAnimation = {
 
  hidden: {
    opacity: 0,
    x: -400,
  },

  visible: {
    opacity: 1,
    x: 0, 
    transition: { delay: 0.15, duration: 2.5, type: "spring"},
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

    <div
        variants={pagesAnimation}
        initial="hidden"
        animate="visible"
        className="contact-section">
      <motion.div
        variants={pagesAnimation}
        initial="hidden"
        animate="visible"
        className="contact-bg">
        <div className="contact-nav">
          <Navbar />
        </div>
        <motion.div 
            variants={textAnimation}
            initial="hidden"
            animate="visible"

          className="contact-intro">
          <h3>Get in Touch with Us</h3>
          <h2>contact us</h2>
          <motion.p 
             variants={textAnimation}
             initial="hidden"
             animate="visible"
          
          className="text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
            iste facilis quos impedit fuga nobis modi debitis laboriosam velit
            reiciendis quisquam alias corporis, maxime enim, optio ab dolorum
            sequi qui.
          </motion.p>
        </motion.div>
      </motion.div>

      <div className="contact-body">

        <div 
          variants={infoAnimation}
          initial="hidden"
          whileInView={"visible"}
          viewport={{once:false,amount:0.3}}
          className="contact-info"
        >
          <motion.div
            variants={infoAnimation}
            initial="hidden"
            whileInView={"visible"}
            viewport={{once:false,amount:0.3}}
            className="contact-info"
          >
            <span>
              <i className="fas fa-mobile-alt"></i>
            </span>
            <span>Phone No.</span>
            <span className="text">+91 9876789800</span>
          </motion.div>

          <motion.div
            variants={infoAnimation}
            initial="hidden"
            whileInView={"visible"}
            viewport={{once:false,amount:0.3}}
            className="contact-info"
            >
            <span>
              <i className="fas fa-envelope-open"></i>
            </span>
            <span>E-mail</span>
            <span className="text">
              <a className="fas-mail" href="mailto:rentit7.com@gmail.com">
                rentit7.com@gmail.com
              </a>
            </span>
          </motion.div>

          <motion.div
            variants={infoAnimation}
            initial="hidden"
            whileInView={"visible"}
            viewport={{once:false,amount:0.3}}
            className="contact-info"
            >
            <span>
              <i className="fas fa-map-marker-alt"></i>
            </span>
            <span>Address</span>
            <span className="text">390001 , Kalabhavan , Vadodara</span>
          </motion.div>

        </div>

        <motion.div 
            variants={infoAnimation}
            initial="hidden"
            whileInView={"visible"}
            viewport={{once:false,amount:0.275}}
            className="contact-form"
          >

          <form ref={form} onSubmit={sendEmail}>
            <div className="contact-form-div">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder=" Your Name"
                required
              />
            </div>

            <div className="contact-form-div">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder=" Your Email"
              />
            </div>

            <div className="contact-form-div">
              <input
                type="text"
                name="subject"
                className="form-control"
                placeholder=" Subject"
              />
            </div>

            <div class="contact-form-div">
              <textarea
                placeholder="  Message"
                name="message"
                className="form-area"
              ></textarea>
            </div>

            <div>
              <button type="submit" className="send-btn">
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </div>

      {/* Map Map */}
  
      <motion.div 
          variants={mapAnimation}
          initial="hidden"
          whileInView={"visible"}
          viewport={{once:false,amount:0.3}}
          className="map"
        >
          {/*MAP  */}
        <h1>Map</h1>

      </motion.div>

      <Footer />
    </div>
  );
};

export default Contact;
