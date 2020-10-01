import React from "react";
import "./Item.css";
import { Button } from "@material-ui/core";

function Item() {
  return (
    <div className="item">
      <div className="item__info">
        <h2>T-Shirt</h2>
        <p>
          <small>£</small>
          <strong>19.99</strong>
        </p>
        <Button className="item__btn">Buy</Button>
      </div>
      <img
        className="item__image"
        src="https://vangogh.teespring.com/v3/image/VdZ1hll1zMclR4c6cC3234Fb4iw/480/560.jpg"
        alt="store item"
      />
    </div>
  );
}

export default Item;
