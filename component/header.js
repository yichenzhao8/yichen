/** @format */
import { useContext, useCallback } from "react";
import { CursorContext } from "../component/cursor/CursorContextProvider";
import styles from "../styles/Header.module.scss";
import { inter, varela } from "../assets/font";
import Intro from "./intro/intro";

export default function header() {
  const [cursor, setCursor] = useContext(CursorContext);
  const activeCursor = useCallback(() => {
    setCursor({ ...cursor, mode: true });
  });
  const inactiveCursor = useCallback(() => {
    setCursor({ ...cursor, mode: false });
  });
  return (
    <>
      <main
        className={`${styles.main} main`}
        onMouseEnter={activeCursor}
        onMouseLeave={inactiveCursor}
        onClick={inactiveCursor}>
        <div className={styles.section}>
          <span className={`${inter.className} ${styles.title}`}>
            Website <br />
            Developer
            <span className={`${varela.className} ${styles.and}`}>&</span>
            <br />
            Designer
          </span>
        </div>
        <Intro />
      </main>
    </>
  );
}
