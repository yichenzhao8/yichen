/** @format */
import React, { useContext, useCallback } from "react";
import { useRouter } from "next/router";

import Image from "next/image";
import Link from "next/link";
import { CursorContext } from "./cursor/CursorContextProvider";

import styles from "../styles/Navbar.module.scss";
import yc from "../public/yichenlogo-01.png";
import yc2 from "../public/yichenlogo-02.png";

const Navlinks = [
  { title: "Work", href: "#work", newPage: false },
  { title: "Design", href: "#design", newPage: false },
  { title: "Resume", href: "yichenzhao-resume.pdf", newPage: true },
];

export default function Navbar(props) {
  const router = useRouter();

  const [cursor, setCursor] = useContext(CursorContext);
  const activeCursor = useCallback(() => {
    setCursor({ ...cursor, mode: true });
  });
  const inactiveCursor = useCallback(() => {
    setCursor({ ...cursor, mode: false });
  });

  return (
    <div className={styles.container} style={{ position: props.position }}>
      <div>
        <Link href="/">
          <Image
            src={router.pathname !== "/" ? yc2 : yc}
            className={styles.logo}
            priority={true}
            alt="yc"
          />
        </Link>
      </div>
      <ul>
        {Navlinks.map((link, id) => (
          <li key={id}>
            <Link
              href={`/${link.href}`}
              target={link.newPage ? "_blank" : ""}
              onMouseEnter={activeCursor}
              onMouseLeave={inactiveCursor}
              onClick={inactiveCursor}>
              <h4 style={{ color: props.text }}>{link.title}</h4>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
