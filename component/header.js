/** @format */
import Image from "next/image";
import styles from "../styles/Header.module.scss";
import photo from "../public/images/yichen.jpg";

export default function header() {
  return (
    <>
      <main className={`${styles.main} main`}>
        <div className={styles.section}>
          <div className={`${styles.text} intro`}>
            <span>
              I'm YiChen, a Frontend Developer and UI/ Graphic Designer. I enjoy
              creating user-centric, delightful, and human experiences.
            </span>
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
    </>
  );
}
