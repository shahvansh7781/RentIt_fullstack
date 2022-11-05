import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import FilterBox from "../FilterBox/FilterBox"
import Cards from "../Cards/Cards"
import './Cars.css';
const Cars = () => {

  return (
    <div className='main-container'>
        <div className="navbar-container">
            <Navbar></Navbar>
        </div>
        <div className="car-container">
            <FilterBox></FilterBox>
            <Cards></Cards>
        </div>

    </div>
  )
}

export default Cars