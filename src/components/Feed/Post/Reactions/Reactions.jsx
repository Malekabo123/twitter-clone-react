import styles from "./Reactions.module.css";

function Reactions({ Icon, number }) {
  return (
    <div className={styles.icon}>
      <div className={styles.svg}>
        <Icon />
      </div>
      <span className={styles.number}>{number}</span>
    </div>
  );
}

export default Reactions;
