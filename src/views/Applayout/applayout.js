import React from "react";
import "./applayout.styles.css";
import Navbar from "../../containers/Navbar";
import Sidebar from "../../containers/Sidebar";
const Applayout = () => {
  return (
    <div className="app-layout-container">
      <div className="app-layout-navbar-container">
        <Navbar />
      </div>
      <div className="app-layout-main-view">
        <div className="app-layout-sidebar-container">
          <Sidebar />
        </div>
        <div className="app-layout-main-container">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Applayout;
