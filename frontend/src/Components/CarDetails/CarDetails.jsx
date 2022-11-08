import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getparticularCar } from '../../Actions/carActions';

const CarDetails = () => {
    const params = useParams();
    console.log(params);
    const dispatch = useDispatch();
 const {car,loading} = useSelector(state=>state.cars);
    useEffect(() => {
      dispatch(getparticularCar(params.id));
    }, [dispatch,params.id])
    // console.log(car);
  return (
    <>
    {
        loading ? (
            <h1>Loading...</h1>
        ) : (
            car && <h1>{car.title}</h1>
        )
    }
    </>
  )
}

export default CarDetails