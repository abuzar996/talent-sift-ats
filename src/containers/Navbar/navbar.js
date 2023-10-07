import React from "react";
import "./navbar.styles.css";
import img from "../../public/Images/ts.png";
import img2 from "../../public/Images/tsmini.png";
import { HiMenu } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../redux/slice/appSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  function onIconClick() {
    dispatch(toggleSidebar());
  }
  return (
    <div className="navbar-container">
      <div className="navbar-menu-container">
        <HiMenu className="navbar-menu-icon" size={30} onClick={onIconClick} />
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
