/** @format */

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../../styles/Design.module.scss";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

const scaleAnimation1 = {
  initial: { scale: 0, x: "0%", y: "0%", opacity: 0 },
  enter: {
    scale: 1,
    x: "0%",
    y: "0%",
    opacity: 1,
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "0%",
    y: "0%",
    opacity: 0,
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};
import gsap from "gsap";

export default function modal({ modal, projects }) {
  const { active, index } = modal;
  const modalContainer = useRef(null);

  useEffect(() => {
    let xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });

    let yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;
      xMoveContainer(pageX);
      yMoveContainer(pageY);
    });
  }, []);
  return (
    <>
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className={styles.modalContainer}>
        <div className={styles.modalSlider}>
          <motion.div
            variants={scaleAnimation1}
            initial="initial"
            animate={active ? "enter" : "closed"}
            className={styles.modalContainer}>
            <div
              style={{ top: index * -100 + "%" }}
              className={styles.modalSlider}>
              {projects.map((project, index) => {
                const { src, color } = project;
                return (
                  <div
                    className={styles.modal}
                    style={{ backgroundColor: color }}
                    key={`modal_${index}`}>
                    <Image
                      src={`/design-images/${src}.jpg`}
                      width={300}
                      height={300}
                      alt="image"
                    />
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
