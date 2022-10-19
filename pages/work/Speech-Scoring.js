/** @format */
import Navbar from "../../component/navbar";

import styles from "../../styles/WorkItem.module.scss";
import Image from "next/image";
import cover from "../../public/mir.jpg";
import Footer from "../../component/footer";

export default function SS() {
  return (
    <>
      <div className="container">
        <Navbar text="#0F110C" position="relative" />
        <div className={styles.wrapper}>
          <h1>Speech Scoring</h1>
          <Image src={cover} alt="Speech Scoring Cover" layout="responsive" />
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
          <video controls loop width="100%">
            <source src="/SS/sample.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <Footer />
    </>
  );
}
