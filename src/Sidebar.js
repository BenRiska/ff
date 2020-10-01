import React from "react";
import SidebarRow from "./SidebarRow";
import StorefrontIcon from "@material-ui/icons/Storefront";
import CollectionsIcon from "@material-ui/icons/Collections";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow Icon={StorefrontIcon} title="Store" />
      <SidebarRow Icon={CollectionsIcon} title="Gallery" />
      <SidebarRow Icon={DoubleArrowIcon} title="Skillshare" />
      <div className="sidebar__footer">
        <p>Featurefield&copy; - 2020</p>
        <br />
        <p>Developed by Ben Taylor</p>
      </div>
    </div>
  );
}

export default Sidebar;
