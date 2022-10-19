/** @format */
import Link from "next/link";

import styles from "../styles/Footer.module.scss";
import SocialLinkedin from "../public/socialLinkedin.svg";
import SocialFb from "../public/socialFb.svg";

export default function footer() {
  return (
    <footer className={styles.container}>
      <h3>© Yichen Zhao 2022</h3>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/yichenzhao8/"
            rel="noopener noreferrer">
            <SocialLinkedin />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100002213001732"
            rel="noopener noreferrer">
            <SocialFb />
          </a>
        </li>
      </ul>
    </footer>
  );
}
