import React from "react";
import "./ExpandedCard.css";
import {IoMdArrowRoundBack} from 'react-icons/io'
const ExpandedCard = ({setExpanded}) => {

  const mystyle = {
    color: "white",
    backgroundColor: "#606060",
    padding: "7px",
    fontFamily: "Arial",
    borderRadius:'10px',
    width : '100%'
  };
  return (
    <div style={mystyle}>
        <div className="back-icon">
          <span onClick={setExpanded}><IoMdArrowRoundBack/></span>
        </div>

        <div className="car-details-container">
        <img
            src="https://cdn.vox-cdn.com/thumbor/HiwWwuQ_03ZW3m2BIcb1NtYPlcw=/0x0:2870x2116/1200x800/filters:focal(1203x969:1661x1427)/cdn.vox-cdn.com/uploads/chorus_image/image/50272225/150028_car.0.jpg"
            alt="https://cdn.vox-cdn.com/thumbor/HiwWwuQ_03ZW3m2BIcb1NtYPlcw=/0x0:2870x2116/1200x800/filters:focal(1203x969:1661x1427)/cdn.vox-cdn.com/uploads/chorus_image/image/50272225/150028_car.0.jpg"
          />
          <div className="car-details">
            <span className="car-label">
              <h3>Company</h3>:     Toyota
            </span>
            <span className="car-label">
              <h3>Model</h3>:     Swift
            </span>
            <span className="car-label">
              <h3>Gear</h3>:      Automatic
            </span>
            <span className="car-label">
              <h3>Capacity</h3>:      6
            </span>
            <span className="car-label">
              <h3>Discription</h3>
            </span>
          </div>
        </div>

        <div className="form-container">login form</div>
      
    </div>
  );
};

export default ExpandedCard;
