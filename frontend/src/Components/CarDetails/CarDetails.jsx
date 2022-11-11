import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getparticularCar } from "../../Actions/carActions";
import Navbar from "../Navbar/Navbar";
import "./CarDetails.css";
import carimg from "../../images/car-img.png";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { GiGearStickPattern } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { AiFillUsb } from "react-icons/ai";
import { MdSensors } from "react-icons/md";
const CarDetails = () => {
  const params = useParams();
  console.log(params);
  const dispatch = useDispatch();
  const { car, loading } = useSelector((state) => state.cars);
  useEffect(() => {
    dispatch(getparticularCar(params.id));
  }, [dispatch, params.id]);
  // console.log(car);
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div style={{ backgroundColor: "#222831" }}>
            <Navbar />
          </div>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div style={{ padding: "2vmax" }}>
              <img src={carimg} alt="" srcset="" className="car-img" />
            </div>
            <div
              style={{
                padding: "2vmax",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h1 style={{ fontSize: "2.1vmax" }}>{car && car.title}</h1>
              <h3 style={{ fontSize: "1.5vmax" }}>₹{car && car.rent}/hr</h3>
              <p style={{ fontSize: "1.1vmax" }}>{car && car.description}</p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  width: "35%",
                  gap: "1.1vmax",
                }}
              >
                <div style={{ fontSize: "1.2vmax" }}>
                  <MdAirlineSeatReclineExtra color="#222831" size="1.3em" />
                  {car && car.features.seats}
                </div>
                <div style={{ fontSize: "1.2vmax" }}>
                  <GiGearStickPattern color="#222831" size="1.3em" />
                  {car && car.features.gear}
                </div>
                <div style={{ fontSize: "1.2vmax" }}>
                  <GoLocation color="#222831" size="1.3em" />
                  {car && car.features.gps}{" "}
                </div>
                <div style={{ fontSize: "1.2vmax" }}>
                  <AiFillUsb color="#222831" size="1.3em" />
                  {car && car.features.usb}
                </div>
                <div style={{ fontSize: "1.2vmax" }}>
                  <MdSensors color="#222831" size="1.3em" />
                  {car && car.features.parkingSensor}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CarDetails;
