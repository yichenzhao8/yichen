/** @format */

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/Loading.module.scss";

const Variant = {
  animate: {
    transition: {
      delayChildren: 0,
      staggerChildren: 0.02,
    },
  },
};

const LetterVariant = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: "linear" },
  },
};

export default function Loading({ isVisible }) {
  return (
    <div className={styles.container}>
      <AnimatePresence>
        {isVisible && (
          <motion.h1
            variants={Variant}
            initial="initial"
            animate="animate"
            exit={{ opacity: 0 }}
            className={styles.name}>
            <motion.span variants={LetterVariant}>Y</motion.span>
            <motion.span variants={LetterVariant}>I</motion.span>
            <motion.span variants={LetterVariant}>C</motion.span>
            <motion.span variants={LetterVariant}>H</motion.span>
            <motion.span variants={LetterVariant}>E</motion.span>
            <motion.span variants={LetterVariant}>N</motion.span>

            <motion.span variants={LetterVariant}>Z</motion.span>
            <motion.span variants={LetterVariant}>H</motion.span>
            <motion.span variants={LetterVariant}>A</motion.span>
            <motion.span variants={LetterVariant}>O</motion.span>
          </motion.h1>
        )}
      </AnimatePresence>
    </div>
  );
}
