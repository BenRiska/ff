import React, { useState, useEffect } from "react";
import "./Photo.css";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import ChatIcon from '@material-ui/icons/Chat';
import db from "./firebase";
import {useStateValue} from "./StateProvider";
import firebase from "firebase";

function Photo({ url, artist, id }) {
  const [open, setOpen] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [openComments, setOpenComments] = useState(false);
  const [modalStyle] = useState(getModalStyle);
  const classes = useStyles();
  const commentClasses = useCommentStyles();
  const [{user}] = useStateValue()
  console.log(user);

  useEffect(() => {
    const unsubscribe = db
      .collection("images")
      .doc(id)
      .collection("comments")
      .orderBy("timestamp", "desc")
      .onSnapshot((snap) =>
        setComments(snap.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      );

    return () => unsubscribe();
  }, [id])

  const postComment = () => {
    if (comment) {
      db.collection("images").doc(id).collection("comments").add({
        user: user.displayName,
        comment: comment,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
    setComment("");
  };


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setOpenComments(false);
  };

  return (
    <div className="photo">
      <Modal open={open} onClose={handleClose}>
        <div style={modalStyle} className={classes.paper}>
          <div className="photo__modal">{url && <img src={url} alt="gallery item" />}</div>
        </div>
      </Modal>
      <Modal open={openComments} onClose={handleClose}>
        <div style={modalStyle} className={commentClasses.paper}>
          <div className="photo__comments">
          <h2>Comments</h2>
          <div className="photo__comment-container">
            {comments.map(comment => (
              <div className="photo__comment">
                <h3>{comment.user}</h3>
                <p>{comment.comment}</p>
              </div>
            ))}
          </div>
          <div className="photo_comment-box">
          <input disabled={!user} value={comment}  
          onChange={e => setComment(e.currentTarget.value)} placeholder="Add a comment..."/>
          <button onClick={postComment}>post</button>
        </div>
          </div>
        </div>
      </Modal>
      <div className="photo__info">
        <h2>
          <a href={`https://www.instagram.com/${artist}`} target="_blank" rel="noopener noreferrer">
            @{artist && artist}
          </a>
        </h2>
        <ChatIcon onClick={e => setOpenComments(true)}/>
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

const useCommentStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    maxHeight: 600,
    maxWidth: 800,
    outline: "none",
    backgroundColor: "white",
    boxShadow: theme.shadows[5],
  },
}));
