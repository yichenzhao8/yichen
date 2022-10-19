/** @format */

import Image from "next/image";

import styles from "../styles/Header.module.scss";
import photo from "../public/yichen.png";

export default function header() {
  return (
    <main className={styles.main}>
      <div className={styles.section}>
        <div className={styles.text}>
          <h1 className={styles.title}>YiChen Zhao</h1>

          <h3>
            I&prime;m a
            <span className={styles.highligh}> frontend developer </span>
            and
            <span className={styles.highligh}> UI/Graphic designer </span>
            based in Seattle.
            <br />I am passionate about building excellent services with great
            UI.
          </h3>
        </div>
        <div className={styles.wrapper}>
          <Image
            src={photo}
            className={styles.img}
            priority={true}
            alt="yichen"
          />
        </div>
      </div>
    </main>
  );
}