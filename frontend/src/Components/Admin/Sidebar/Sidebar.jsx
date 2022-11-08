import React, { useState } from "react";
import './Sidebar.css'
import {
  MdLineStyle,
  MdGroups,
  MdCarRental,
  MdOutlineAttachMoney,
} from "react-icons/md";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";

export default function SideBar() {
  const [currentLink, setCurrentLink] = useState(1);

  return (
    <>
      <h3 className="sidebarTitle">DashBoard</h3>
      <div className="sidebarList">
        <Link to="/admin/dashboard" className="link">
          <span
            onClick={() => {
              setCurrentLink(1);
              window.scrollTo({
                top: 0,
                behavior: "smooth",
                /* you can also use 'auto' behaviour
         in place of 'smooth' */
              });
            }}
            className={
              currentLink === 1 ? "sidebarListItem active" : "sidebarListItem"
            }
          >
            <MdLineStyle className="sidebarIcon" />
            Dashboard
          </span>
        </Link>

        <Link to="/admin/dashboard/users" className="link">
          <span
            onClick={() => setCurrentLink(2)}
            className={
              currentLink === 2 ? "sidebarListItem active" : "sidebarListItem"
            }
          >
            <MdGroups className="sidebarIcon" />
            Users
          </span>
        </Link>

        <Link to="/admin/dashboard/cars" className="link">
          <span
            onClick={() => setCurrentLink(3)}
            className={
              currentLink === 3 ? "sidebarListItem active" : "sidebarListItem"
            }
          >
            <MdCarRental className="sidebarIcon" />
            Cars
          </span>
        </Link>

        <Link to="/admin/dashboard/bookings" className="link">
          <span
            onClick={() => {
              setCurrentLink(4);
              window.scrollTo({
                top: 600,
                behavior: "smooth",
                /* you can also use 'auto' behaviour
         in place of 'smooth' */
              });
            }}
            className={
              currentLink === 4 ? "sidebarListItem active" : "sidebarListItem"
            }
          >
            <MdOutlineAttachMoney className="sidebarIcon" />
            Bookings
          </span>
        </Link>
      </div>
    </>
  );
}
