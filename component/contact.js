/** @format */

import React from "react";
import { useContext, useCallback } from "react";
import { CursorContext } from "../component/cursor/CursorContextProvider";

import styles from "../styles/Contact.module.scss";

export default function contact() {
  const [cursor, setCursor] = useContext(CursorContext);
  const activeCursor = useCallback(() => {
    setCursor({ ...cursor, mode: true });
  });
  const inactiveCursor = useCallback(() => {
    setCursor({ ...cursor, mode: false });
  });

  return (
    <div className={styles.container}>
      <div className={styles.div}>
        <span>Let's work together</span>
        <a
          className="contact-email"
          onMouseEnter={activeCursor}
          onMouseLeave={inactiveCursor}
          onClick={inactiveCursor}
          href="mailto:yichenzhao8@gmail.com">
          yichenzhao8@gmail.com
        </a>
      </div>
    </div>
  );
}
