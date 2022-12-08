import React, { useState, useEffect } from "react";
import "./BookingList.css";

import { DataGrid } from "@mui/x-data-grid";
import "../Dashboard.css";
import "../Sidebar/Sidebar.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

// import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import Navbar from "../../Navbar/Navbar";
import SideBar from "../Sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getAllBookings } from "../../../Actions/adminActions";

export default function BookingList() {

const dispatch = useDispatch();
const {bookings} = useSelector(state=>state.admin);

  useEffect(() => {
  dispatch(getAllBookings());
  }, [dispatch]);

const rows = [];
bookings && bookings.forEach(booking => {
  let amt = `₹${booking.totalAmount}`
  rows.push({
    id:booking._id,
carid:booking.carBooked,
amount:amt,
hours:booking.totalHours
  })
});
  const columns = [
    { field: "id", headerName: "Booking ID", minWidth: 180, flex: 0.2 },
    
    {
      field: "carid",
      headerName: "Car ID",
      minWidth: 180,
      flex: 0.2,
      // renderCell: (params) => {
      //   return (
      //     <div className='productListItem'>
      //       <img className='productListImg' src={params.row.img} alt='' />
      //       {params.row.name}{' '}
      //     </div>
      //   )
      // },
    },
    { field: "amount", headerName: "Amount", minWidth: 180, flex: 0.2 },
    {
      field: "hours",
      headerName: "Total Hours",
      flex: 0.1,
      minWidth: 160,
    },
    // {
    //   field: "action",
    //   headerName: "Action",
    //   width: 150,
    //   renderCell: (params) => {
    //     return (
    //       <>
    //         <Link to={"/product/" + params.row.id}>
    //           <button className="productListEdit">Edit</button>
    //         </Link>

    //         <DeleteOutlineIcon
    //           className="productListDelete"
    //           onClick={() => handleDelete(params.row.id)}
    //         />
    //       </>
    //     );
    //   },
    // },
  ];
  return (
    <div style={{ width: "100%", backgroundColor: "#222831", height: "100vh" }}>
      <Navbar />
      <div className="main-container2">
        <div className="sidebar-container">
          <SideBar />
        </div>
        <div className="productList">
          <DataGrid
            style={{ color: "#EEEEEE" }}
            rows={rows}
            disableSelectionOnClick
            columns={columns}
            autoHeight
            // pageSize={8}
            // rowsPerPageOptions={[5]}
            // checkboxSelection
          />
        </div>
      </div>
    </div>
  );
}
