import React from "react";
import "./Shop.css";
import Sidebar from "./Sidebar";
import InstagramTab from "./InstagramTab";
import Item from "./Item";

function Shop() {
  return (
    <div className="shop">
      <Sidebar />
      <div className="shop__items">
        <div className="shop__container">
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
      <InstagramTab />
    </div>
  );
}

export default Shop;
