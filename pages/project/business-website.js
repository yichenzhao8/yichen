/** @format */
import Image from "next/image";
import Navbar from "../../component/navbar/navbar";
import CaseStudy from "../../component/caseStudy";
import Footer from "../../component/footer/footer";

import styles from "../../styles/WorkItem.module.scss";

import cover from "../../public/cover-images/businessCover.jpg";
import showcase from "../../public/project-images/business-website/showcase.jpg";

export default function businessWebsite() {
  return (
    <>
      <Navbar />
      <div className={styles.wrapper}>
        <h1 className={styles.title}>DeepWave Website</h1>
        <Image
          src={cover}
          alt="DeepWave Business Website Cover"
          className={styles.coverimg}
        />
        <div className={styles.divide}>
          <div className={styles.details}>
            <div className={styles.combineTitle}>
              <div className={styles.subTitle}>
                <h3>Year</h3>
                <span>2021</span>
              </div>
              <div className={styles.subTitle}>
                <h3>Product</h3>
                <span>Business Website</span>
              </div>
            </div>
          </div>
          <div>
            <p className={styles.description}>
              DeepWave is dedicated to acoustic-related artificial intelligence
              research and has applied its solutions in the field of music
              entertainment. In order to attract new customers and expand its
              business, DeepWave has made the decision to build a company
              website.
            </p>
          </div>
        </div>
        <div className={styles.divide}>
          <div className={styles.subTitle}>
            <h3>My Role</h3>
            <span> UI Designer and Frontend Developer</span>
          </div>
          <div>
            <p>
              As a UI Designer and Frontend Developer, my primary responsibility
              involved designing and developing the website to effectively
              showcase the advanced technical features offered by DeepWave.
            </p>
          </div>
        </div>
        <div className={styles.divide}>
          <div className={styles.subTitle}>
            <h3>Implementation</h3>
            <span> Designed and Built the static website</span>
          </div>
          <div>
            <p>
              I designed the entire user interface (UI) for the business website
              using Sketch. This encompassed creating layouts and visuals for
              various pages, such as the Home, About, Tech, Media, Career, News,
              FAQ, Terms and Conditions, and Privacy Policy pages.
            </p>
            <br />
            <p>
              The website was developed using React, chosen for its excellent
              reusability and maintainability characteristics.
            </p>
          </div>
        </div>
        <Image src={showcase} className={styles.singleImage} alt="showcase" />
        <CaseStudy case={[2, 3, 4]} />
      </div>
      <Footer />
    </>
  );
}
