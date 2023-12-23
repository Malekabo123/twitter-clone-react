import styles from "./SidebarElement.module.css";

function SidebarElement({ active, text, Icon, onClick }) {
  return (
    <div
      className={`${styles.sidebarElement} ${active && styles.active}`}
      onClick={onClick}
    >
      <Icon className={styles.icon} />
      <h3 className={styles.sidebarElementText}>{text}</h3>
    </div>
  );
}

export default SidebarElement;
