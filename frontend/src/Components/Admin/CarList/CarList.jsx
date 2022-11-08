import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CarList.css";
import "../Dashboard.css"
import "../Sidebar/Sidebar.css"
import { DataGrid } from "@mui/x-data-grid";


import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import {MdDeleteOutline} from "react-icons/md";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import Navbar from "../../Navbar/Navbar";
import SideBar from "../Sidebar/Sidebar";

export default function CarList() {
  // const [data, setData] = useState(productRows);
  const [cars, setCars] = useState([]);

  const getCars = async () => {
    // const cars1 = [];
    // await axios.get("/myapp/cars").then((car) => {
    //   Object.values(car.data)[1].map((e) => {
    //     cars1.push({
    //       id: e._id,
    //       title: e.title,
    //       noPlate: e.noPlate,
    //       stock: e.stock,
    //       rent: e.rent,
    //       key:e._id
    //     });
    //   });
    //   setCars(cars1);
    // });
  };
  useEffect(() => {
    getCars();
  }, []);

  const handleDelete = (id) => {
    setCars(cars.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "Car ID", minWidth: 200,flex:0.3 },
    // {
    //   field: "img",
    //   headerName: "Image",
    //   width: 100,
    //   renderCell: (params) => {
    //     return (
    //       <div className="userListUser">
    //         <img className="userListImg" src={params.row.img} alt="" />
    //       </div>
    //     );
    //   },
    // },
    {
      field: "title",
      headerName: "Car Name",
      minWidth: 130,
      flex:0.2
      // renderCell: (params) => {
      //   return (
      //     <div className='productListItem'>
      //       <img className='productListImg' src={params.row.img} alt='' />
      //       {params.row.name}{' '}
      //     </div>
      //   )
      // },
    },
    {
      field: "rent",
      headerName: "Rent",
flex:0.1,
      minWidth: 140,
    },
    {
      field: "action",
      headerName: "Action",
      minWidth: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>

            <MdDeleteOutline
              className="productListDelete"
              size="1.5rem"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div style={{ width: "100%", backgroundColor: "#222831", height: "100vh" }}>
        <Navbar/>
        <div className="main-container2">
            <div className="sidebar-container">
                <SideBar/>
            </div>
    <div className="carList">
      <div className="createProduct">
        <Link to="/admin/car/new">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <DataGrid
        style={{ color: "#EEEEEE"}}
        rows={cars}
        disableSelectionOnClick
        columns={columns}
        autoHeight
        // autoHeight
        // pageSize={8}
        // rowsPerPageOptions={[5]}
        // checkboxSelection
      />
    </div>
        </div>
    </div>
  );
}
