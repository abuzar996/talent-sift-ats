import React from "react";
import "./sidebar.styles.css";
import RowContent from "./RowContent";
//import { GiHamburgerMenu } from "react-icons/gi";
//AiOutlineMenu;
import img from "../../public/Images/ts.png";
const Sidebar = () => {
  return (
    <div className="sidebar-main-container">
      <div className="sidebar-logo-container">
        <img className="sidebar-logo-image-full" src={img} alt="img" />
      </div>
      <RowContent />
      {/* <GiHamburgerMenu size="small" /> */}
    </div>
  );
};

export default Sidebar;
