import React from "react";
import RowContent from "./rowContent";
import { data } from "./data";
const RowContentList = () => {
  return (
    <div className="sidebar-row-list">
      {data.map((row) => (
        <RowContent {...row} />
      ))}
    </div>
  );
};

export default RowContentList;
