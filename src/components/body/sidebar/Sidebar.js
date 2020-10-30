import React from "react";
import "../../../styles/sidebar.css";
import SidebarRow from "./SidebarRow";
import FlagIcon from "@material-ui/icons/Flag";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import PeopleIcon from "@material-ui/icons/People";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import EventIcon from "@material-ui/icons/Event";
import HistoryIcon from "@material-ui/icons/History";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStateValue } from "../../../api/StateProvider";
function Sidebar() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="sidebar">
      <SidebarRow src={user.photoURL} title={user.displayName} />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 Informative Center"
      />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={SupervisedUserCircleIcon} title="Groups" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={EventIcon} title="Events" />
      <SidebarRow Icon={HistoryIcon} title="Memories" />
      <SidebarRow Icon={BookmarkIcon} title="Saved" />
      <SidebarRow Icon={FlagIcon} title="Pages" />
      <SidebarRow Icon={ExpandMoreIcon} title="See more" />
    </div>
  );
}

export default Sidebar;
