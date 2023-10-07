import React from "react";
import "./navbar.styles.css";
import img from "../../public/Images/ts.png";
import img2 from "../../public/Images/tsmini.png";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-menu-container">
        <HiMenu className="navbar-menu-icon" size={30} />
      </div>
      <div className="navbar-inner-container">
        <div className="navbar-logo-container">
          <img className="navbar-logo-image-full" src={img} alt="img" />
          <img className="navbar-logo-image-mobile" src={img2} alt="img2" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
