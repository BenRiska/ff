import React from "react";
import "./LandingContent.css";
import { Button } from "@material-ui/core";

function LandingContent() {
  return (
    <div className="landingContent">
      {/* left content*/}
      <div className="landingContent__left">
        <div className="landingContent__leftContent">
          <h1>Welcome!</h1>
          <p>
            lorem ipsum dolam sjfkdsj d dfds dsfd sd f sd fd sd fd sds f sd fd s
            fdfsfds dsfdf fdsfd fdsfdsfdssfdfds fdsfdsfd fdsd ffd fdsdsf fdffds
            fdfd ffd df s df dsfd sfsdfds df s dfs d sf fd
          </p>
        </div>
        <div className="landingContent__leftContent">
          <h2>Discover talented new artists</h2>
          <p>Browse the Gallery</p>

          <img
            className="landingContent__galleryImage"
            src="https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/120202384_389707365370521_5389801171743883244_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_cat=109&_nc_ohc=fl9Re9C1z1YAX9w1EIJ&oh=05fb2a86f1a327176c5a48645f68675d&oe=5FA0F9B0"
            alt="anime art"
          />
          <Button className="landingContent__btn">Go</Button>
        </div>
      </div>
      {/* right content*/}
      <div className="landingContent__right">
        <h4 className="landingContent__bannerTitle">
          2 Months FREE with Skillshare!
        </h4>
        <img
          className="landingContent__banner"
          src="https://www.onlinecoursecoupons.com/wp-content/uploads/2016/06/skillshare-logo.jpg"
        />
        <div className="landingContent__rightContent">
          <h2>Visit the store</h2>
          <p>New items in stock! browse now</p>
          <Button className="landingContent__btn">Go</Button>
        </div>
      </div>
    </div>
  );
}

export default LandingContent;
