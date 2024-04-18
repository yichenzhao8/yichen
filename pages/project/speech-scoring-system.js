/** @format */
import Image from "next/image";
import styles from "../../styles/WorkItem.module.scss";

import Navbar from "../../component/navbar/navbar";
import CaseStudy from "../../component/caseStudy";
import Footer from "../../component/footer/footer";

import cover from "../../public/cover-images/mirCover.jpg";
import gif from "../../public/project-images/mir/sample.gif";

export default function SS() {
  return (
    <>
      <Navbar />
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Speech Scoring</h1>
        <Image
          src={cover}
          alt="Speech Scoring Cover"
          className={styles.coverimg}
          style={{ objectPosition: "50% 0%" }}
        />

        <div className={styles.divide}>
          <div className={styles.subTitle}>
            <h3>My Role</h3>
            <span> UI Designer and Frontend Developer</span>
          </div>
          <div className={styles.subTitle}>
            <h3>Implementation</h3>
            <span>Create UI design, build JavaSript website</span>
          </div>
        </div>
        <div>
          <Image src={gif} alt="previous-version" />
        </div>

        <CaseStudy case={[1, 3, 4]} />
      </div>

      <Footer />
    </>
  );
}
