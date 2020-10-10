import React, { useState } from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import StorefrontIcon from "@material-ui/icons/Storefront";
import CollectionsIcon from "@material-ui/icons/Collections";

import { useHistory } from "react-router-dom";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import NavLink from "./NavLink"
import HomeIcon from "@material-ui/icons/Home";


// Header Component
function Header() {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);
  const classes = useStyles();
  const [{ user }, dispatch] = useStateValue();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const closeNav = () => {
    setNavOpen(false);
  }

  const signIn = (e) => {
    e.preventDefault();
    // sign in...
    auth
      .signInWithPopup(provider)
      .then((res) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: res.user,
        });
      })
      .catch((err) => alert(err.message));
    setOpen(false);
  };

  const logOut = () => {
    if (user) {
      auth.signOut();
      dispatch({
        type: actionTypes.SET_USER,
        user: null,
      });
    }
  };

  return (
    <div className="header">
      {navOpen && 
      <div className="header__dropdownNav">
        <div className="exit__btn">
          <CloseIcon fontSize="large" className="dropdown__close" onClick={e=> setNavOpen(false)}/>
        </div>
        <div className="dropdown__links">
        <NavLink closeNav={closeNav} redirect={false} Icon={HomeIcon} title="Home" />
        <NavLink closeNav={closeNav} redirect={false} Icon={StorefrontIcon} title="Store" />
        <NavLink closeNav={closeNav} redirect={false} Icon={CollectionsIcon} title="Gallery" />
        </div>
      </div>
      }
      {/* Add Modal Here */}
      <Modal open={open} onClose={handleClose}>
        <div style={modalStyle} className={classes.paper}>
          <form onSubmit={(e) => signIn(e)} className="header__modalForm">
            <h2 id="simple-modal-title">@Featurefield</h2>
            <img src="https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-19/s150x150/44369640_739650676412539_748425753867059200_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_ohc=1bObekvP97EAX9OFkJn&oh=0f51aa024891326127b435edb3fe1d89&oe=5FA0C9DD" alt="featurefield" />
            <button>Log In With Google</button>
          </form>
        </div>
      </Modal>
      {/* Left - App title and Icon */}
      <div className="header__left">
        <InstagramIcon fontSize="inherit" className="header__leftIcon" />
        <a href="https://www.instagram.com/featurefield/?hl=en" target="_blank" rel="noopener noreferrer">
          <Avatar
            className="header__leftAvatar"
            src="https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-19/s150x150/44369640_739650676412539_748425753867059200_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_ohc=1bObekvP97EAX9OFkJn&oh=0f51aa024891326127b435edb3fe1d89&oe=5FA0C9DD"
          />
        </a>

        <i onClick={(e) => history.push("/")}>
          @<span>Featurefield</span>
        </i>
      </div>
      {/* Center - Main Page navigation */}
      {/* <div className="header__center">
        <div onClick={(e) => history.push("/store")} className="header__option">
          <StorefrontIcon fontSize="large" />
        </div>
        <div
          onClick={(e) => history.push("/gallery")}
          className="header__option"
        >
          <CollectionsIcon fontSize="large" />
        </div>
      </div> */}
      {/* right - User Avatar, Sign In, Basket and Contact navigation */}
      <div className="header__right">
        <div className="header__avatar">
          <Avatar src={user?.photoURL} />
          {!user ? (
            <p onClick={handleOpen}>Sign In</p>
          ) : (
            <p onClick={logOut}>Sign out</p>
          )}
        </div>
        {/* <IconButton className="header__smallIcon disabledIcon">
          <ShoppingBasketIcon />
        </IconButton>
        <IconButton className="header__smallIcon disabledIcon">
          <MailIcon />
        </IconButton>
        <IconButton className="header__smallIcon disabledIcon">
          <ExpandMoreIcon />
        </IconButton> */}
      </div>
      <div className="header__burgerNav">
        <MenuIcon onClick={e => setNavOpen(true)} fontSize="large"/>
      </div>
    </div>
  );
}

export default Header;

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
    width: 400,
    outline: "none",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
