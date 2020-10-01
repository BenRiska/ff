import React from "react";
import "./Photo.css";

function Photo() {
  return (
    <div className="photo">
      <div className="photo__info">
        <h2>@user</h2>
        <p>24/7/2020</p>
      </div>
      <img
        className="photo__image"
        src="https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/120202384_389707365370521_5389801171743883244_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_cat=109&_nc_ohc=fl9Re9C1z1YAX9w1EIJ&oh=05fb2a86f1a327176c5a48645f68675d&oe=5FA0F9B0"
      />
    </div>
  );
}

export default Photo;
