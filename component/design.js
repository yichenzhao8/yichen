/** @format */
import Designgrid from "./designgrid";
import styles from "../styles/Design.module.scss";
import g1 from "../public/Design/g1.jpg";
import g2 from "../public/Design/g2.jpg";
import g3 from "../public/Design/g3.jpg";
import g5 from "../public/Design/g5.jpg";
import g6 from "../public/Design/g6.jpg";
import g7 from "../public/Design/g7.jpg";
import g8 from "../public/Design/g8.jpg";
import g9 from "../public/Design/g9.jpg";

export default function Work() {
  return (
    <div style={{ padding: "2rem 0 10rem 0" }}>
      <h1 style={{ padding: "1rem 0" }} id="design">
        Design
      </h1>

      <div className={styles.gallery}>
        <Designgrid img={g1} />
        <Designgrid img={g2} />
        <Designgrid img={g3} />
        <Designgrid img={g5} />
        <Designgrid img={g9} />
        <Designgrid img={g7} />
        <Designgrid img={g8} />
        <Designgrid img={g6} />
      </div>
    </div>
  );
}
