import React from "react";
import "./SidebarRow.css";
import { useHistory } from "react-router-dom";

function SidebarRow({ Icon, title, redirect, url }) {
  const history = useHistory();
  return (
    <div
      onClick={(e) => {
        redirect ? window.open(url) : history.push(`/${title}`);
      }}
      className="sidebarRow"
    >
      <Icon />
      <h4>{title}</h4>
    </div>
  );
}

export default SidebarRow;
