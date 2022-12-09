import React from 'react'
import Testimonials from './Testimonials/Testimonials'
import './About.css'
import { motion } from 'framer-motion'
// import Footer from '../Footer/Footer'
import Counters from './Counters/Counters'
// import Counters from '../Counters/Counters'

const About = () => {
  const transition = { type: 'spring', duration: 3 }
  return (
    <div className='aboutUs'>
      <div className='parallax'>
        <header>
          <div className='text'>
            <h1>RentIt</h1>
            <h1>About Us</h1>
          </div>
        </header>
      </div>
      <Counters></Counters>

      <div className='main'>
        <div className='partition'>
          <div className='leftp'></div>
          <div className='centerp'>
            <motion.img
              src='https://images.pexels.com/photos/305070/pexels-photo-305070.jpeg?auto=compress&cs=tinysrgb&w=600'
              initial={{ opacity: 0, x: -100 }}
              transition={{ ...transition, duration: 2 }}
              whileInView={{ opacity: 1, x: 0 }}
            ></motion.img>
          </div>
          <div className='rightp'>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              transition={{ ...transition, duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <motion.span>About Us</motion.span>
              <br></br>
              <br></br>
              <motion.span className='head'>Welcome To RentIt</motion.span>
              <br></br>
              <br></br>A small river named Duden flows by their place and
              supplies it with the necessary regelialia. It is a paradisematic
              country, in which roasted parts of sentences fly into your mouth.
              On her way she met a copy. The copy warned the Little Blind Text,
              that where it came from it would have been rewritten a thousand
              times and everything that was left from its origin would be the
              word "and" and the Little Blind Text should turn around and return
              to its own, safe country. A small river named Duden flows by their
              place and supplies it with the necessary regelialia. It is a
              paradisematic country, in which roasted parts of sentences fly
              into your mouth.<br></br>
              <button>Search Vehicle</button>
            </motion.p>
          </div>
        </div>

        <div className='image'></div>
      </div>
      <br></br>
      <br></br>
      <Testimonials></Testimonials>
      <br></br>
      <br></br>

      <br></br>
      <br></br>
      <hr></hr>

      {/* <Footer></Footer> */}
    </div>
  )
}

export default About
