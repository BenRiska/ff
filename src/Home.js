import React from "react";
import Sidebar from "./Sidebar";
import LandingContent from "./LandingContent";
import InstagramTab from "./InstagramTab";
import "./Home.css";

function home() {
  return (
    <div className="home">
      {/* Sidebar */}
      <Sidebar />
      {/* LandingContent */}
      <LandingContent />
      {/* InstagramTab */}
      <InstagramTab />
    </div>
  );
}

export default home;
