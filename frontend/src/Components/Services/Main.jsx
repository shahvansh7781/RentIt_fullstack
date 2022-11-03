import React from 'react'
import "./Main.css"
const Main = () => {
  return (
  <>
  <div style={{ padding: "5vmax" }}>
        <div className="service-headings">
          <h5>SERVICES</h5>
          <h1>Our Latest Services</h1>
        </div>
        <div className="service-body">
          <div className="service-body-parent">
            <div className="service-body-child">
              <i class="fa-solid fa-location-dot fa-3x"></i>
            </div>
            <h4>Wedding Ceremony</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit.
              Recusandae, quos.
            </p>
          </div>
          <div className="service-body-parent">
            <div className="service-body-child">
              <i class="fa-solid fa-route fa-3x"></i>
            </div>
            <h4>City Transfer</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
              Nobis, assumenda.
            </p>
          </div>
          <div className="service-body-parent">
            <div className="service-body-child">
              <i class="fa-solid fa-plane-departure fa-3x"></i>
            </div>

            <h4>Airport Transfer</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit.
              Minima, deserunt.
            </p>
          </div>
          <div className="service-body-parent">
            <div className="service-body-child">
              <i class="fa-solid fa-city fa-3x"></i>
            </div>
            <h4>Whole City Tour</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
              Expedita, fuga?
            </p>
          </div>
        </div>
      </div>
  </>
  )
}

export default Main