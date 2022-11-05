import React, { useState } from "react";
import Card from "./Card/Card";

import "./Cards.css";
import ExpandedCard from "./ExpandedCard/ExpandedCard";
const Cards = () => {
  const [expanded, setExpanded] = useState(false);

  // const fetchCars = async () => {
  //   const response = await fetch("http://localhost:5000/myapp/cars");
  //   const data = await response.json();

  //   console.log(data.cars[0].features.fuelType);
  // };

  return (
    <>
      <div className="Cards">
        {/* <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card> */}

        {/* <ExpandedCard></ExpandedCard> */}

        {expanded ? (
          <ExpandedCard setExpanded={() => setExpanded(false)}></ExpandedCard>
        ) : (
          <Card setExpanded={() => setExpanded(true)}></Card>
        )}
      </div>
    </>
  );
};

export default Cards;
