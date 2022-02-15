/** @format */

import styles from "../styles/Alert.module.scss";

export default function sucessAlert(props) {
  return (
    <div className={styles.container}>
      <div
        className={styles.alert}
        style={{ display: props.display ? "block" : "none" }}>
        <h3>Message Sent!</h3>
      </div>
    </div>
  );
}
