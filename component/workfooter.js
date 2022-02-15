/** @format */
import styles from "../styles/Footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.divide}>
        <div>
          <h3>
            I'm currently looking for new opportunies, my inbox is always open.
            Whether you have a question or just want to say Hi.
          </h3>
          <h1>yichenzhao8@gmail.com</h1>
        </div>
        <div>
          <ul>
            <li>
              <h4>Home</h4>
            </li>
            <li>
              <h4>Work</h4>
            </li>
            <li>
              <h4>Design</h4>
            </li>
            <li>
              <h4>Resume</h4>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.line}>
        <h3>© Yichen Zhao 2022</h3>
      </div>
    </div>
  );
}
