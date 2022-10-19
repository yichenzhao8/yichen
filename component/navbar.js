/** @format */
import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Navbar.module.scss";
import yc from "../public/yc.png";

export default function Navbar(props) {
  return (
    <div className={styles.container} style={{ position: props.position }}>
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
      <ul style={{ color: props.text }}>
        <li>
          <Link href="/#work">
            <h4>Work</h4>
          </Link>
        </li>
        <li>
          <Link href="/#design">
            <h4>Design</h4>
          </Link>
        </li>
        <li>
          <Link href="/yichenzhao-cv-2022.pdf">
            <h4>Resume</h4>
          </Link>
        </li>
      </ul>
    </div>
  );
}
