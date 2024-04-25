/** @format */
import React, { useContext, useCallback, useState, useEffect } from "react";
import { useRouter } from "next/router";

import Image from "next/image";
import Link from "next/link";

import { CursorContext } from "../cursor/CursorContextProvider";
import { motion } from "framer-motion";

import styles from "../../styles/Navbar.module.scss";
import ycWhite from "../../public/yichenlogo-01.png";
import ycBlack from "../../public/yichenlogo-02.png";

import { navbarProps } from "./types";

const Navlinks = [
  { title: "Code", href: "#work", newPage: false },
  { title: "Design", href: "#design", newPage: false },
];

export default function navbar(props: navbarProps) {
  const router = useRouter();
  const [cursor, setCursor] = useContext(CursorContext);
  const [isOpen, setIsOpen] = useState(false);
  const condition = isOpen ? "0%" : "-100%";

  const activeCursor = useCallback(() => {
    setCursor({ ...cursor, active: true, mode: true });
  });
  const inactiveCursor = useCallback(() => {
    setCursor({ ...cursor, active: false, mode: true });
  });
  const { position } = props;

  const handleDrawer = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleEscKeyPress = (e) => {
      if (e.keyCode === 27 && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.setProperty("overflow", "hidden");
    } else {
      document.body.style.removeProperty("overflow");
    }

    document.addEventListener("keydown", handleEscKeyPress);

    return () => {
      document.removeEventListener("keydown", handleEscKeyPress);
    };
  }, [isOpen]);
  return (
    <div className={styles.container} onMouseEnter={inactiveCursor}>
      <div className={styles.brandWrapper}>
        <Link href="/">
          <Image
            src={props.textColor == "black" ? ycBlack : ycWhite}
            className={styles.logo}
            priority={true}
            alt="yc"
          />
        </Link>
      </div>
      <div
        className={`${styles.navContent} ${styles.sideNav}`}
        style={{ right: condition }}>
        {Navlinks.map((link, id) => (
          <div key={id}>
            <Link
              href={`/${link.href}`}
              target={link.newPage ? "_blank" : ""}
              onMouseEnter={activeCursor}
              onMouseLeave={inactiveCursor}
              onClick={(inactiveCursor, handleDrawer)}>
              <h4 style={{ color: props.textColor }}>{link.title}</h4>
            </Link>
          </div>
        ))}

        <div className={styles.openToWork} onClick={handleDrawer}>
          <span className={styles.innerCircle}>
            <motion.div
              className={styles.box}
              animate={{
                scale: [1, 2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />
          </span>
          <h4 style={{ color: props.textColor }}>open to work</h4>
        </div>
      </div>
      <div
        aria-label="Open Menu"
        onClick={handleDrawer}
        className={styles.menuBar}>
        <Image
          priority
          src={isOpen ? "../../icon/menuOpen.svg" : "../../icon/menuClose.svg"}
          alt="menu"
          height={20}
          width={20}
        />
      </div>
    </div>
  );
}
