import React from "react";
import "./rowContent.styles.css";

const RowContent = ({ label, icon }) => {
  return (
    <div className="sidebar-row-container">
      <div style={{ paddingTop: "2px" }}>{icon}</div>
      <label className="sidebar-row-text">{label}</label>
    </div>
  );
};

export default RowContent;
