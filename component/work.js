/** @format */
import Grid from "./grid";
import styles from "../styles/Work.module.scss";
import Link from "next/link";

import businessCover from "../public/business.jpg";
import soviaCover from "../public/sovia.jpg";
import hullaballooCover from "../public/hullaballoo.jpg";
import accountCover from "../public/account.jpg";
import mirCover from "../public/mir.jpg";
import wasinCover from "../public/wasin.jpg";

export default function Work() {
  return (
    <div className={styles.section}>
      <h1 id="work">Work</h1>

      <div className={styles.container}>
        <Link href="/work/DeepWave-Business-Website">
          <a>
            <Grid img={businessCover} title="DeepWave Business Website" />
          </a>
        </Link>
        <Link href="/work/Sovia">
          <a>
            <Grid img={soviaCover} title="Sovia" />
          </a>
        </Link>
        <Link href="/work/Hullaballoo">
          <a>
            <Grid img={hullaballooCover} title="Hullaballoo" />
          </a>
        </Link>
        <Link href="/work/DeepWave-Account">
          <a>
            <Grid img={accountCover} title="DeepWave Account" />
          </a>
        </Link>
        <Link href="/work/Speech-Scoring">
          <a>
            <Grid img={mirCover} title="Speech Scoring" />
          </a>
        </Link>
        <Link href="/work/Wasin-Dashboards">
          <a>
            <Grid img={wasinCover} title="Wasin Dashboards" />
          </a>
        </Link>
      </div>
    </div>
  );
}
