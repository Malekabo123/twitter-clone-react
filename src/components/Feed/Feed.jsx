import styles from "./Feed.module.css";
import Post from "./Post/Post";
import PostTweet from "./PostTweet/PostTweet";
import db from "../Firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";

const formatTimeStamp = (posts) => {
  const currentTime = new Date();

  return posts.map((element) => {
    const timestampDate = element.timeStamp.toDate();

    const timeDifference = currentTime - timestampDate;

    let elapsedText;

    //check timeStamps in posts to show the date in a particular format
    if (timeDifference < 60 * 60 * 1000) {
      // Less than an hour
      const elapsedMinutes = Math.floor(timeDifference / (1000 * 60));
      elapsedText = `${elapsedMinutes}m`;
    } else if (timeDifference < 24 * 60 * 60 * 1000) {
      // Within the last 24 hours
      const elapsedHours = Math.floor(timeDifference / (1000 * 60 * 60));
      elapsedText = `${elapsedHours}h`;
    } else if (timeDifference < 7 * 24 * 60 * 60 * 1000) {
      // Between the last 24 hours and last week
      const elapsedDays = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
      elapsedText = `${elapsedDays}d`;
    } else {
      // Past the last week
      const options = { day: "numeric", month: "short" };
      elapsedText = timestampDate.toLocaleDateString(undefined, options);
    }

    return {
      ...element,
      timeStamp: elapsedText,
    };
  });
};

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const collectionRef = collection(db, "posts");

    //get every document in the posts collection from firebase
    const unsub = onSnapshot(collectionRef, (querySnapshot) => {
      const items = [];

      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });

      const modifiedItems = formatTimeStamp(items);

      setPosts(modifiedItems);
    });
    return () => {
      unsub();
    };
  }, []);

  return (
    <div className={styles.feed}>
      <h2 className={styles.feedHome}>Home</h2>
      <PostTweet />

      {posts.map((post, index) => {
        return (
          <Post
            key={index}
            displayName={post.displayName}
            userName={post.userName}
            verified={post.verified}
            timeStamp={post.timeStamp}
            avatar={post.avatar}
            text={post.text}
            image={post.image}
          />
        );
      })}
    </div>
  );
}

export default Feed;
