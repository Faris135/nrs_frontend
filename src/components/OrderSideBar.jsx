import React from "react";
import "./SideBar.css";

const SideBar = (props) => {
  return (
    <div className="sideBar">
      <h1>Order list</h1>
      <ul className="OrderList">
        <li className="orderItem"></li>
      </ul>
    </div>
  );
};

export default SideBar;
