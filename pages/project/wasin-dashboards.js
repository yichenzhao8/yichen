/** @format */
import Image from "next/image";
import Navbar from "../../component/navbar/navbar";
import CaseStudy from "../../component/caseStudy";
import Footer from "../../component/footer/footer";

import styles from "../../styles/WorkItem.module.scss";
import cover from "../../public/project-images/wasin/cover.jpg";
import item13 from "../../public/project-images/wasin/items-13.jpg";
import item14 from "../../public/project-images/wasin/items-14.jpg";

export default function SS() {
  return (
    <>
      <Navbar />
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Wasin Dasboards</h1>
        <Image
          src={cover}
          alt="Wasin Dashboards Cover"
          className={styles.coverimg}
        />
        <div className={styles.divide}>
          <div className={styles.details}>
            <div className={styles.combineTitle}>
              <div className={styles.subTitle}>
                <h3>Year</h3>
                <span>2020</span>
              </div>
              <div className={styles.subTitle}>
                <h3>Product</h3>
                <span>Dashboards</span>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div className={styles.divide}>
          <div className={styles.subTitle}>
            <h3>My Role</h3>
            <span> UI Designer and Frontend Developer</span>
          </div>
          <div className={styles.subTitle}>
            <h3>Implementation</h3>
            <span>Created UI design and built the JavaSript website</span>
          </div>
        </div>
        <div className={styles.imageSection}>
          <Image src={item13} alt="previous-version" />
          <Image src={item14} alt="previous-version" />
        </div>
        <CaseStudy case={[1, 2, 3]} />
      </div>

      <Footer />
    </>
  );
}
