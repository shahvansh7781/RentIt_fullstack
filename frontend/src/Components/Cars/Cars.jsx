import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import FilterBox from "../FilterBox/FilterBox";
import "./Cars.css";
import { useDispatch, useSelector } from "react-redux";
import { getallCars } from "../../Actions/carActions";
import Card from "../Card/Card";
const Cars = () => {
  const dispatch = useDispatch();
  const { cars } = useSelector((state) => state.cars);
  useEffect(() => {
    dispatch(getallCars());
  }, [dispatch]);
  return (
    <>
      <div className="main-container-1">
        <div>
          <Navbar />
        </div>
        <div className="car-container">
          <FilterBox />

          <div className="card-container">
            {cars &&
              cars.map((car) => {
                return <Card key={car._id} cars={car} />;
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cars;
