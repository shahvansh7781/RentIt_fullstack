import React from "react";
import CheckBox from "./CheckBox";
import "./FilterBox.css";
const FilterBox = () => {
const fetchCars = async() => {
const response = await fetch("http://localhost:5000/myapp/cars");
const data = await response.json();

console.log(data.cars[0].features.fuelType);
}
  
  return (
    <div className="FilterBox">
    <button onClick={fetchCars}>Get Cars</button>

      <div className="Heading">FILTER</div>

      {/* <div className="CheckBox-group">
        <div className="SubHeading">
          <h2>Gear</h2>
        </div>
        <div className="CheckBox">
          <input type="checkbox" />
          <label htmlFor="">manual</label>
        </div>
        <div className="CheckBox">
          <input type="checkbox" />
          <label htmlFor="">Automatic</label>
        </div>
      </div>

      <div className="CheckBox-group">
        <div className="SubHeading">
          <h2>Compony</h2>
        </div>
        <div className="CheckBox">
          <input type="checkbox" />
          <label htmlFor="">Toyota</label>
        </div>
        <div className="CheckBox">
          <input type="checkbox" />
          <label htmlFor="">Hyundai</label>
        </div>
        <div className="CheckBox">
          <input type="checkbox" />
          <label htmlFor="">Maruti</label>
        </div>
      </div>

      <div className="CheckBox-group">
        <div className="SubHeading">
          <h2>Price</h2>
        </div>
        <div className="CheckBox">
          <input type="checkbox" />
          <label htmlFor="">low-high</label>
        </div>
        <div className="CheckBox">
          <input type="checkbox" />
          <label htmlFor="">high-low</label>
        </div>
      </div>

      <div className="CheckBox-group">
        <div className="SubHeading">
          <h2>Price</h2>
        </div>
        <div className="CheckBox">
          <input type="checkbox" />
          <label htmlFor="">low-high</label>
        </div>
        <div className="CheckBox">
          <input type="checkbox" />
          <label htmlFor="">high-low</label>
        </div>
      </div> */}
<CheckBox/>
      
    </div>
  );
};

export default FilterBox;
