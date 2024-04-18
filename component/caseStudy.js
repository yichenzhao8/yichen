/** @format */

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const imageVariants = {
  beforeHover: {},
  onHover: { scale: 1.1 },
};

import styles from "../styles/WorkItem.module.scss";
const cases = [
  {
    id: 1,
    title: "Business Website",
    img: "businessCover",
    link: "business-website",
  },
  { id: 2, title: "Sovia", img: "soviaCover", link: "sovia" },
  {
    id: 3,
    title: "Hullaballoo",
    img: "hullaballooCover",
    link: "hullaballoo",
  },
  {
    id: 4,
    title: "Account Center",
    img: "accountCover",
    link: "account-center",
  },
  {
    id: 5,
    title: "Speech Scoring System",
    img: "mirCover",
    link: "speech-scoring-system",
  },
  { id: 6, title: "Dashboard", img: "wasinCover", link: "wasin-dashboards" },
];

export default function caseStudy(props) {
  const intersection = cases.filter((element) =>
    props.case.includes(element.id)
  );
  return (
    <div className={styles.caseStudyContainer}>
      <h2>More Case Study</h2>
      <div className={styles.content}>
        {intersection.map((item) => {
          return (
            <Link
              key={item.id}
              href={`/project/${item.link}`}
              className={styles.link}>
              <motion.div
                className={styles.box}
                initial="beforeHover"
                whileHover="onHover">
                <motion.div
                  className={styles.imageBox}
                  variants={imageVariants}
                  style={{
                    backgroundImage: `url(../cover-images/${item.img}.jpg)`,
                  }}
                />
              </motion.div>
              <h3>{item.title}</h3>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
