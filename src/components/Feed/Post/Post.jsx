import { Avatar } from "@mui/material";
import styles from "./Post.module.css";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PollOutlinedIcon from "@mui/icons-material/PollOutlined";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Reactions from "./Reactions/Reactions";

function Post({
  displayName,
  userName,
  verified,
  timeStamp,
  avatar,
  text,
  image,
}) {
  const iconsArray = [
    { icon: ChatBubbleOutlineIcon, number: "1.7K" },
    { icon: RepeatIcon, number: "2.2K" },
    { icon: FavoriteBorderIcon, number: "7.5K" },
    { icon: PollOutlinedIcon, number: "400K" },
    { icon: BookmarkBorderIcon },
  ];

  return (
    <div className={styles.post}>
      <Avatar src={avatar} />

      <div className={styles.postContainer}>
        <div className={styles.namesRow}>
          <h3>{displayName}</h3>
          {verified && <RiVerifiedBadgeFill />}
          <div className={styles.greyHeaderContainer}>
            <p className={styles.greyHeader}>@{userName} </p>
            <p className={styles.greyHeader}>. {timeStamp}</p>
          </div>
        </div>

        <p>{text}</p>

        {image && <img src={image} className={styles.postImg} />}

        <div className={styles.reactions}>
          {iconsArray.map((item, index) => {
            return (
              <Reactions Icon={item.icon} number={item.number} key={index} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Post;
