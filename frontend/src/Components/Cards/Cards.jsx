import React from "react";
import Card from "./Card/Card";

import "./Cards.css";
import ExpandedCard from "./ExpandedCard/ExpandedCard";
const Cards = () => {
  // const fetchCars = async () => {
  //   const response = await fetch("http://localhost:5000/myapp/cars");
  //   const data = await response.json();

  //   console.log(data.cars[0].features.fuelType);
  // };

  return (
    <>
      <div className="Cards">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>

        {/* <ExpandedCard></ExpandedCard> */}
      </div>
    </>
  );
};

export default Cards;
