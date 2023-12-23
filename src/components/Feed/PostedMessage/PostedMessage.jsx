import { useEffect } from "react";
import styles from "./PostedMessage.module.css";

function PostedMessage({ showPostedMessage }) {
  useEffect(() => {
    setTimeout(() => {
      showPostedMessage(false);
    }, 4000);
  }, []);

  return <div className={styles.message}>Post Sent</div>;
}

export default PostedMessage;
