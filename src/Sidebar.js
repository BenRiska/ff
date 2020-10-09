import React from "react";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@material-ui/icons/Home";
import StorefrontIcon from "@material-ui/icons/Storefront";
import CollectionsIcon from "@material-ui/icons/Collections";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div>
        <SidebarRow redirect={false} Icon={HomeIcon} title="Home" />
        <SidebarRow redirect={false} Icon={StorefrontIcon} title="Store" />
        <SidebarRow redirect={false} Icon={CollectionsIcon} title="Gallery" />
        <SidebarRow
          url="https://join.skillshare.com/premium-114/?coupon=igamb3715&partner=Featurefield&utm_source=Instagram&utm_medium=ambassadors-stories&utm_campaign=mktg-ambassadors-stories-featurefield"
          redirect={true}
          Icon={DoubleArrowIcon}
          title="Skillshare"
        />
      </div>
      <div className="sidebar__footer">
        <p>Featurefield&copy; - 2020</p>
        <br />
        <p>Developed by Ben Taylor</p>
      </div>
    </div>
  );
}

export default Sidebar;
