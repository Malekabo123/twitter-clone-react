import styles from "./Trend.module.css";

function Trend({ where, title, posts }) {
  return (
    <div className={styles.trend}>
      <p className={styles.where}>
        {where} {!where.includes("Trending") && `· Trending`}
      </p>
      <p className={styles.title}>{title}</p>
      <p className={styles.posts}>{posts} posts</p>
    </div>
  );
}

export default Trend;
