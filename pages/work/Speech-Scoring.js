/** @format */
import Navbar from "../../component/navbar";
import GoHome from "../../component/goHome";
import Footer from "../../component/footer";

import styles from "../../styles/WorkItem.module.scss";
import Image from "next/image";
import cover from "../../public/SS/cover.jpg";

export default function SS() {
  return (
    <>
      <div className="container">
        <Navbar text="#1e1e1e" position="relative" />
        <h1 className={styles.h1}>Speech Scoring</h1>
        <Image
          src={cover}
          alt="Speech Scoring Cover"
          className={styles.fullimg}
        />
        <div className={styles.wrapper}>
          <div className={styles.divide}>
            <div>
              <h3>My Role</h3>
              <br />
              <span> UI Designer &amp; Frontend Developer</span>
            </div>
            <div>
              <h3>Implementation</h3>
              <br />
              <span>Create UI design, build JavaSript website</span>
            </div>
          </div>
          <video autoPlay loop muted>
            <source src="/SS/sample.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <GoHome />
      <Footer />
    </>
  );
}
