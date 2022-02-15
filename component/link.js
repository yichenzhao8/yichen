/** @format */
import styles from "../styles/WorkItem.module.scss";

export default function Link(props) {
  return (
    <div className={styles.link}>
      <h1>Check it out</h1>
      <a href={props.link}>
        <h2>{props.link}</h2>
      </a>
    </div>
  );
}
