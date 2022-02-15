/** @format */

import styles from "../styles/Alert.module.scss";

export default function failAlert(props) {
  return (
    <div className={styles.container}>
      <div
        className={styles.alert}
        style={{ display: props.display ? "block" : "none" }}>
        <h3>Error! Please try again later.</h3>
      </div>
    </div>
  );
}
