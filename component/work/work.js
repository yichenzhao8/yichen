/** @format */
import { useContext, useCallback } from "react";
import { CursorContext } from "../cursor/CursorContextProvider";

import Grid from "./grid";
import styles from "../../styles/Work.module.scss";
import Link from "next/link";

const Items = [
  {
    title: "Business Website",
    img: "businessCover",
    link: "business-website",
    tags: ["Web Design, Web Development"],
  },
  {
    title: "sovia",
    img: "soviaCover",
    link: "sovia",
    tags: ["Branding, Web Design, Web Development"],
  },
  {
    title: "Hullaballoo",
    img: "hullaballooCover",
    link: "hullaballoo",
    tags: ["Branding, Web Design, Web Development"],
  },
  {
    title: "Account Center",
    img: "accountCover",
    link: "account-center",
    tags: ["Web Design, Web Development"],
  },
  {
    title: "Speech Scoring System",
    img: "mirCover",
    link: "speech-scoring-system",
    tags: ["Web Design, Web Development"],
  },
  {
    title: "Dashboards",
    img: "wasinCover",
    link: "wasin-dashboards",
    tags: ["Web Design, Web Development"],
  },
];

export default function Work() {
  const [cursor, setCursor] = useContext(CursorContext);
  const activeCursor = useCallback(() => {
    setCursor({ ...cursor, active: true, mode: true });
  });
  const inactiveCursor = useCallback(() => {
    setCursor({ ...cursor, active: false, mode: false });
  });

  return (
    <>
      <>
        {/* <div className={styles.title}>
          <div className={styles.scroll}>
            <div className={styles.mscroll}>
              <span>
                SELECTED PROJECT - SELECTED PROJECT - SELECTED PROJECT -
                SELECTED PROJECT - SELECTED PROJECT - SELECTED PROJECT -
                SELECTED PROJECT - SELECTED PROJECT -
              </span>
              <span>
                SELECTED PROJECT - SELECTED PROJECT - SELECTED PROJECT -
                SELECTED PROJECT - SELECTED PROJECT - SELECTED PROJECT -
                SELECTED PROJECT - SELECTED PROJECT -
              </span>
              <span>
                SELECTED PROJECT - SELECTED PROJECT - SELECTED PROJECT -
                SELECTED PROJECT - SELECTED PROJECT - SELECTED PROJECT -
                SELECTED PROJECT - SELECTED PROJECT -
              </span>
              <span>
                SELECTED PROJECT - SELECTED PROJECT - SELECTED PROJECT -
                SELECTED PROJECT - SELECTED PROJECT - SELECTED PROJECT -
                SELECTED PROJECT - SELECTED PROJECT -
              </span>
            </div>
          </div>
        </div> */}

        <div className={styles.title1}>
          <span>Selected Project</span>
          <p>
            I spearheaded both website development and user interface design for
            those projects.
          </p>
        </div>
        <section className={styles.container}>
          {Items.map((item, id) => (
            <div className={styles.column} key={id}>
              <Link
                href={`/project/${item.link}`}
                onMouseEnter={activeCursor}
                onMouseLeave={inactiveCursor}
                onClick={inactiveCursor}
                className={styles.containerWrapper}>
                <Grid item={item} />
                <div className={styles.description}>
                  <p>{item.title}</p>
                  {item.tags.map((i) => {
                    return <span>{i}</span>;
                  })}
                </div>
              </Link>
            </div>
          ))}
        </section>
      </>
    </>
  );
}
