/** @format */
import Image from "next/image";
import styles from "../styles/Work.module.scss";

export default function Grid(props) {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.overlay}></div>
        <Image
          src={props.img}
          className={`${styles.img}`}
          priority={true}
          alt={props.title}
        />
      </div>

      <h4 className={styles.title}>{props.title}</h4>
    </>
  );
}
