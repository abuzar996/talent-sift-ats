import React from "react";
import "./applayout.styles.css";
import Navbar from "../../containers/Navbar";
import { useSelector } from "react-redux";
import Sidebar from "../../containers/Sidebar";
const Applayout = () => {
  const { sidebarOpen } = useSelector((state) => state.appSettings);

  return (
    <div className="app-layout-container">
      <div className="app-layout-navbar-container">
        <Navbar />
      </div>
      <div className="app-layout-main-view">
        <div
          className={
            sidebarOpen
              ? "app-layout-sidebar-container"
              : "app-layout-sidebar-container-none"
          }
        >
          <Sidebar />
        </div>
        <div
          className={
            sidebarOpen
              ? "app-layout-main-container"
              : "app-layout-main-container-full"
          }
        >
          Hello world
        </div>
      </div>
    </div>
  );
};

export default Applayout;
