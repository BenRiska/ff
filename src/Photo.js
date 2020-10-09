import React, { useState } from "react";
import "./Photo.css";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

function Photo({ url, artist }) {
  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);
  const classes = useStyles();
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="photo">
      <Modal open={open} onClose={handleClose}>
        <div style={modalStyle} className={classes.paper}>
          <div className="photo__modal">{url && <img src={url} alt="gallery item" />}</div>
        </div>
      </Modal>
      <div className="photo__info">
        <h2>
          <a href={`https://www.instagram.com/${artist}`} target="_blank" rel="noopener noreferrer">
            @{artist && artist}
          </a>
        </h2>
      </div>
      {url && <img onClick={handleOpen} className="photo__image" src={url} alt="gallery item" />}
    </div>
  );
}

export default Photo;

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    maxHeight: 800,
    maxWidth: 1000,
    outline: "none",
    backgroundColor: "black",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
