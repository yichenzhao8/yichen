/** @format */

import styles from "../styles/Loading.module.scss";

export default function Loading(props) {
  return <div className={props.loading ? styles.screen : styles.none}></div>;
}
