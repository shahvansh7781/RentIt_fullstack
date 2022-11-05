import React from "react";
import "./Card.css";
import { TbManualGearbox } from "react-icons/tb";
import { FaUsers} from "react-icons/fa";
const Card = ({setExpanded}) => {
  return (
    <div className="main-contanier">
      <div className="card">
        <div className="card-nav">
          <div className="card-heading">
            <h3>toyota</h3>
            <h5>swift</h5>
          </div>
        </div>
        <div className="main-content">
          <img
            src="https://cdn.vox-cdn.com/thumbor/HiwWwuQ_03ZW3m2BIcb1NtYPlcw=/0x0:2870x2116/1200x800/filters:focal(1203x969:1661x1427)/cdn.vox-cdn.com/uploads/chorus_image/image/50272225/150028_car.0.jpg"
            alt="https://cdn.vox-cdn.com/thumbor/HiwWwuQ_03ZW3m2BIcb1NtYPlcw=/0x0:2870x2116/1200x800/filters:focal(1203x969:1661x1427)/cdn.vox-cdn.com/uploads/chorus_image/image/50272225/150028_car.0.jpg"
          />
        </div>
        <div className="card-bottom-nav">
          <div className="car-info">
            <h3 className="car-space">
                <FaUsers className="car-icon"/>
                4
            </h3>
            <h5 className="car-gear">
              <TbManualGearbox className="car-icon" />
              manual
            </h5>
           
          </div>
          <div className="car-price">
              <button onClick={setExpanded}>146$/day</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
