import { useState } from "react";
import styles from "./PostTweet.module.css";
import { Avatar } from "@mui/material";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import db from "../../Firebase";
import { collection, addDoc } from "firebase/firestore";
import PostedMessage from "../PostedMessage/PostedMessage";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";

function PostTweet() {
  const [tweetText, setTweetText] = useState("");
  const [tweetImgUrl, setTweetImgUrl] = useState("");
  const [tweetAvatarUrl, setTweetAvatarUrl] = useState("");
  const [visibleInput, setVisibleInput] = useState(false);
  const [posted, setPosted] = useState(false);

  const showPostedMessage = (flag) => {
    setPosted(flag);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const collectionRef = collection(db, "posts");
    const tweetImgUrlCheck = tweetImgUrl.match(/\.(jpeg|jpg|gif|png)$/) || "";
    const tweetAvatarUrlCheck = tweetAvatarUrl.match(/\.(jpeg|jpg|gif|png)$/);

    const newPost = {
      displayName: "Armin",
      userName: "armin",
      verified: true,
      text: tweetText,
      timeStamp: new Date(),
      image: tweetImgUrlCheck && tweetImgUrl,
      avatar: tweetAvatarUrlCheck
        ? tweetAvatarUrl
        : "./photo_2021-11-25_18-59-31.jpg",
    };

    showPostedMessage(true);
    if (tweetText) {
      addDoc(collectionRef, newPost);
    }

    setTweetText("");
    setTweetAvatarUrl("");
    setTweetImgUrl("");
  };

  return (
    <div className={styles.tweetPosting}>
      <form onSubmit={submitHandler}>
        <div className={styles.tweetBox}>
          <Avatar src="./photo_2021-11-25_18-59-31.jpg" />
          <TextareaAutosize
            className={styles.tweetText}
            // type="text"
            maxRows={6}
            placeholder="What is happening?!"
            value={tweetText}
            onChange={(e) => setTweetText(e.target.value)}
          />
        </div>

        <div className={styles.tweetMedia}>
          <ImageOutlinedIcon onClick={() => setVisibleInput(!visibleInput)} />
          {visibleInput && (
            <div className={styles.postUrls}>
              <input
                type="url"
                placeholder="Optional: Paste Image URL"
                onChange={(e) => setTweetImgUrl(e.target.value)}
                value={tweetImgUrl}
                className={`${styles.imgUrl} ${
                  visibleInput ? styles.visible : ""
                }`}
              />
              <input
                type="url"
                placeholder="Optional: Paste Avatar URL"
                onChange={(e) => setTweetAvatarUrl(e.target.value)}
                value={tweetAvatarUrl}
                className={`${styles.imgUrl} ${
                  visibleInput ? styles.visible : ""
                }`}
              />
            </div>
          )}
          <button type="submit" className={styles.postBtn}>
            Post
          </button>
        </div>

        {posted && <PostedMessage showPostedMessage={showPostedMessage} />}
      </form>
    </div>
  );
}

export default PostTweet;
