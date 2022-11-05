import React from "react";
import "./ExpandedCard.css";
const ExpandedCard = () => {

  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
    borderRadius:'10px',
    width : '100%'
  };
  return (
    <div style={mystyle}>
        <div className="back-icon">
          <span>Logo</span>
        </div>

        <div className="car-details-container">
          <img src="" alt="Image" />
          <div className="car-details">
            <span>
              <h3>Company</h3>:Toyota
            </span>
            <span>
              <h3>Model</h3>:Swift
            </span>
            <span>
              <h3>Gear</h3>:Automatic
            </span>
            <span>
              <h3>Capacity</h3>:6
            </span>
            <span>
              <h3>Discription</h3>
            </span>
          </div>
        </div>

        <div className="form-container">login form</div>
      
    </div>
  );
};

export default ExpandedCard;
