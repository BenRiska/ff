import React from "react";
import "./LandingContent.css";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function LandingContent() {
  const history = useHistory();
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
          <p>Browse the Gallery.</p>
          <Button onClick={(e) => {
         history.push("/gallery");
      }} className="landingContent__btn">Go</Button>
      <div className="landingContent__imageScroller">
          <img onClick={(e) => {
         history.push("/gallery");
      }}
            className="landingContent__galleryImage"
            src="https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/120202384_389707365370521_5389801171743883244_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_cat=109&_nc_ohc=fl9Re9C1z1YAX9w1EIJ&oh=05fb2a86f1a327176c5a48645f68675d&oe=5FA0F9B0"
            alt="anime art"
          />
          <img onClick={(e) => {
         history.push("/gallery");
      }}
            className="landingContent__galleryImage"
            src="https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/120844497_162497902191691_3269177091614968118_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_cat=107&_nc_ohc=q4LLABYBYUEAX9Dzwr4&oh=43fce4617ca7b840250813bcd1974ea2&oe=5FA72E67"
            alt="anime art"
          />
          
          <img onClick={(e) => {
         history.push("/gallery");
      }}
            className="landingContent__galleryImage"
            src="https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/120076179_792395474910662_7094036232622976047_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_cat=102&_nc_ohc=MKG6ag7VM5UAX9ZsRM8&oh=041e7b5368131b4cf6100d78c029baab&oe=5FAA029E"
            alt="anime art"
          />
          </div>
        </div>
      </div>
      {/* right content*/}
      <div className="landingContent__right">
        <h4 className="landingContent__bannerTitle">
          2 Months FREE with Skillshare!
        </h4>
        <img onClick={(e) => {
         window.open("https://join.skillshare.com/premium-114/?coupon=igamb3715&partner=Featurefield&utm_source=Instagram&utm_medium=ambassadors-stories&utm_campaign=mktg-ambassadors-stories-featurefield");
      }}
          className="landingContent__banner"
          src="https://www.onlinecoursecoupons.com/wp-content/uploads/2016/06/skillshare-logo.jpg"
          alt="skillshare promotion banner"
        />
        <div className="landingContent__rightContent">
          <h2>Visit the store</h2>
          <p>New items in stock! browse now.</p>
          <Button onClick={(e) => {
         history.push("/store");
      }} className="landingContent__btn">Go</Button>
        </div>
        <div className="landingContent__rightContent">
          <h2>Check out the Instagram!</h2>
          <p>See our latest posts.</p>
          <Button onClick={(e) => {
         window.open("https://www.instagram.com/featurefield/?hl=en")
      }} className="landingContent__btn">Go</Button>
        </div>
      </div>
    </div>
  );
}

export default LandingContent;
