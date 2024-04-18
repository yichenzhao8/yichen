/** @format */

import React from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { ppeditorialnewULI } from "../assets/font";
import styles from "../styles/snippets.module.scss";

export default function scrollTitle({ title, href, times }) {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <motion.p
      id={href}
      style={{ x }}
      className={`${ppeditorialnewULI.className} ${styles.scrollTitle}`}>
      {`${title} - `.repeat(times).trim()}
    </motion.p>
  );
}
