import styles from "./Sidebar.module.css";
import SidebarElement from "./SidebarElement/SidebarElement";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { RiTwitterXFill } from "react-icons/ri";
import { useState } from "react";

function Sidebar() {
  const [isActive, setIsActive] = useState(0);

  const handleSidebarElementClick = (index) => {
    setIsActive(index);
  };

  const sidebarElements = [
    { Icon: HomeIcon, text: "Home" },
    { Icon: SearchIcon, text: "Explore" },
    { Icon: NotificationsNoneIcon, text: "Notifications" },
    { Icon: MailOutlineIcon, text: "Messages" },
    { Icon: BookmarkBorderIcon, text: "Bookmarks" },
    { Icon: ListAltIcon, text: "Lists" },
    { Icon: PermIdentityIcon, text: "Profile" },
    { Icon: MoreHorizIcon, text: "More" },
  ];

  return (
    <div className={styles.sidebar}>
      <div className={styles.flexFix}>
        <TwitterIcon className={styles.twitterIcon} />

        {sidebarElements.map((element, index) => (
          <SidebarElement
            key={index}
            active={index === isActive}
            Icon={element.Icon}
            text={element.text}
            onClick={() => handleSidebarElementClick(index)}
          />
        ))}

        {window.innerWidth >= 1050 && (
          <button className={styles.twitterButton}>Tweet</button>
        )}
        {window.innerWidth < 1050 && (
          <button className={styles.twitterButton}>
            <RiTwitterXFill />
          </button>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
