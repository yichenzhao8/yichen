/** @format */

import styles from "../../styles/Design.module.scss";

export default function designProject({ index, title, setModal }) {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className={styles.project}>
      <span>{title}</span>
    </div>
  );
}
