import React, { useState, useEffect } from "react";
import "./Gallery.css";
import Sidebar from "./Sidebar";
import InstagramTab from "./InstagramTab";
import Photo from "./Photo";
import db from "./firebase";

function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    db.collection("images").onSnapshot((snap) =>
      setImages(snap.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
    );
  }, []);

  console.log(images);
  return (
    <div className="gallery">
      <Sidebar />
      <div className="gallery__column">
        <div className="gallery__photos">
          {images.map((image) => (
            <Photo key={image.id} url={image.url} artist={image.artist} />
          ))}
        </div>
      </div>
      <InstagramTab />
    </div>
  );
}

export default Gallery;
