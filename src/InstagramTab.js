import React from "react";
import "./InstagramTab.css";
import InstagramEmbed from "react-instagram-embed";

function InstagramTab() {
  return (
    <div className="instagramTab">
      <h3 className="instagramTab__title">Live Feed</h3>
      <InstagramEmbed
        url="https://www.instagram.com/p/CFSgbfYnAmO/"
        maxWidth={700}
        hideCaption={false}
        containerTagName="div"
        protocol=""
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
      />
    </div>
  );
}

export default InstagramTab;
