/** @format */
import Image from "next/image";
import styles from "../styles/Work.module.scss";

export default function Grid(props) {
  return (
    <div className={styles.wrapper}>
      <Image src={props.img} className={styles.img} priority={true} />
      <h4>{props.title}</h4>
    </div>
  );
}
