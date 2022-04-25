import React from "react";
import "../../Sidebar.css";
import SidebarRow from "./SidebarRow";
import { ExpandMoreOutlined } from "@material-ui/icons";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import { useStateValue } from "../../context/StateProvider";

import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import PeopleIcon from "@material-ui/icons/People";
import StorefrontIcon from "@material-ui/icons/Storefront";
import GroupIcon from "@material-ui/icons/Group";
import MovieIcon from "@material-ui/icons/Movie";

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="sidebar">
      <SidebarRow src={user.photoURL} title={user.displayName} />
      <SidebarRow Icon={AccountBalanceIcon} title="Top Rating School" />

      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={GroupIcon} title="Group" />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={WatchLaterIcon} title="Memories" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={MovieIcon} title="Watch" />
      <SidebarRow Icon={ExpandMoreOutlined} title="News" />
    </div>
  );
}

export default Sidebar;
