import React from "react";
import "./Item.css";
import { Button } from "@material-ui/core";

function Item({ title, price, image, url }) {
  return (
    <div className="item">
      <div className="item__info">
        <h2>{title}</h2>
        <p>
          <small>£</small>
          <strong>{price}</strong>
        </p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <Button className="item__btn">Buy</Button>
        </a>
      </div>
      <img className="item__image" src={image} alt="store item" />
    </div>
  );
}

export default Item;
