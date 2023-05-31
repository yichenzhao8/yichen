/** @format */
import Designgrid from "./designgrid";
import styles from "../styles/Design.module.scss";
import g1 from "../public/Design/g1.jpg";
import g2 from "../public/Design/g2.jpg";
// import g3 from "../public/Design/g3.jpg";
import g5 from "../public/Design/g5.jpg";
import g6 from "../public/Design/g6.jpg";
import g7 from "../public/Design/g7.jpg";
import g8 from "../public/Design/g8.jpg";

export default function Design(props) {
  return (
    <div className={styles.designSection}>
      <h1>Design</h1>
      <div className={styles.gallery}>
        <Designgrid src={g2} title="Book Cover" />
        <Designgrid src={g5} title="Flyer" />
        <Designgrid src={g6} title="Logo" />
        <Designgrid src={g7} title="Logo" />
        <Designgrid src={g8} title="Mobile UI design" />
        <Designgrid src={g1} title="Social Media" />
      </div>
    </div>
  );
}
