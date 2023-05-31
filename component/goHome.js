/** @format */

import React from "react";
import styles from "../styles/WorkItem.module.scss";
import Link from "next/link";

export default function goHome() {
  return (
    <Link className={styles.goback} href="/">
      <span>return to Homepage</span>
    </Link>
  );
}
