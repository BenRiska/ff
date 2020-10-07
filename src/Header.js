import React from "react";
import "./Header.css";
import { Avatar, IconButton } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import StorefrontIcon from "@material-ui/icons/Storefront";
import CollectionsIcon from "@material-ui/icons/Collections";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import MailIcon from "@material-ui/icons/Mail";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useHistory } from "react-router-dom";

// Header Component
function Header() {
  const history = useHistory();
  return (
    <div className="header">
      {/* Add Modal Here */}
      {/* Left - App title and Icon */}
      <div className="header__left">
        <InstagramIcon fontSize="inherit" className="header__leftIcon" />
        <a href="https://www.instagram.com/featurefield/?hl=en" target="_blank">
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
      <div className="header__center">
        <div onClick={(e) => history.push("/store")} className="header__option">
          <StorefrontIcon fontSize="large" />
        </div>
        <div
          onClick={(e) => history.push("/gallery")}
          className="header__option"
        >
          <CollectionsIcon fontSize="large" />
        </div>
      </div>
      {/* right - User Avatar, Sign In, Basket and Contact navigation */}
      <div className="header__right">
        <div className="header__avatar">
          <Avatar /> <p>Ben Taylor</p>
        </div>
        <IconButton className="header__smallIcon">
          <ShoppingBasketIcon />
        </IconButton>
        <IconButton className="header__smallIcon">
          <MailIcon />
        </IconButton>
        <IconButton className="header__smallIcon">
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
