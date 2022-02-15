/** @format */
import yc from "../public/yc.png";
import styles from "../styles/Navbar.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Navbar(props) {
  return (
    <div className={styles.container}>
      <div style={{ width: "4%" }}>
        <Link href="/">
          <Image
            src={yc}
            className={styles.logo}
            layout="responsive"
            priority={true}
          />
        </Link>
      </div>
      <ul className={styles.ul} style={{ color: props.text }}>
        <li>
          <Link href="/">
            <a>
              <h4>About</h4>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/#work">
            <a>
              <h4>Work</h4>
            </a>
          </Link>
        </li>

        <li>
          <Link href="/#design">
            <a>
              <h4>Design</h4>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/yichenzhao-cv-2022.pdf">
            <a>
              <h4>Resume</h4>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
