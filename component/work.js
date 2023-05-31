/** @format */
import { useContext, useCallback } from "react";
import { CursorContext } from "../component/cursor/CursorContextProvider";

import Grid from "./grid";
import styles from "../styles/Work.module.scss";
import Link from "next/link";

import businessCover from "../public/cover/business.jpg";
import soviaCover from "../public/cover/sovia.jpg";
import hullaballooCover from "../public/cover/hullaballoo.jpg";
import accountCover from "../public/cover/account.jpg";
import mirCover from "../public/cover/mir.jpg";
import wasinCover from "../public/cover/wasin.jpg";
import daniel from "../public/cover/daniel.jpg";

const Items = [
  { title: "DeepWave Business Website", img: businessCover },
  { title: "Sovia", img: soviaCover },
  { title: "Hullaballoo", img: hullaballooCover },
  { title: "DeepWave Account", img: accountCover },
  { title: "Speech Scoring", img: mirCover },
  { title: "Wasin Dashboards", img: wasinCover },
  { title: "Daniel Personal Website", img: daniel },
];

export default function Work() {
  const [cursor, setCursor] = useContext(CursorContext);
  const activeCursor = useCallback(() => {
    setCursor({ ...cursor, active: true });
  });
  const inactiveCursor = useCallback(() => {
    setCursor({ ...cursor, active: false });
  });

  return (
    <div className={styles.section}>
      <h1 id="work">Website</h1>

      <div className={styles.container}>
        {Items.map((item, id) => (
          <Link
            key={id}
            href={`/work/${item.title.split(" ").join("-")}`}
            onMouseEnter={activeCursor}
            onMouseLeave={inactiveCursor}
            onClick={inactiveCursor}>
            <Grid img={item.img} title={item.title} />
          </Link>
        ))}
      </div>
    </div>
  );
}
