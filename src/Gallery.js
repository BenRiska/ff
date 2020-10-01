import React from "react";
import "./Gallery.css";
import Sidebar from "./Sidebar";
import InstagramTab from "./InstagramTab";
import Photo from "./Photo";

function Gallery() {
  return (
    <div className="gallery">
      <Sidebar />
      <div className="gallery__column">
        <div className="gallery__photos">
          <Photo />
          <Photo />
          <Photo />
          <Photo />
        </div>
      </div>
      <InstagramTab />
    </div>
  );
}

export default Gallery;
