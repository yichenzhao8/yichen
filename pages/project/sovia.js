/** @format */
import Image from "next/image";
import Navbar from "../../component/navbar/navbar";
import CaseStudy from "../../component/caseStudy";
import Footer from "../../component/footer/footer";

import styles from "../../styles/WorkItem.module.scss";

import cover from "../../public/cover-images/soviaCover.jpg";
import item7 from "../../public/project-images/sovia/items-07.jpg";
import item8 from "../../public/project-images/sovia/items-08.jpg";
import item9 from "../../public/project-images/sovia/items-09.jpg";
import item10 from "../../public/project-images/sovia/items-10.jpg";
import gif from "../../public/project-images/sovia/video.gif";
export default function Sovia() {
  return (
    <>
      <Navbar />
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Sovia</h1>
        <Image src={cover} alt="Sovia Cover" className={styles.coverimg} />
        <div className={styles.divide}>
          <div className={styles.details}>
            <div className={styles.combineTitle}>
              <div className={styles.subTitle}>
                <h3>Year</h3>
                <span>2021</span>
              </div>
              <div className={styles.subTitle}>
                <h3>Product</h3>
                <span>Audio Service</span>
              </div>
            </div>
          </div>
          <div>
            <p className={styles.description}>
              Sovia is an advanced singing voice separation system specifically
              designed to separate vocals and background music from various
              sources such as YouTube links or audio files. Its primary
              objective is to deliver an unparalleled singing and listening
              experience by extracting and isolating the vocals with exceptional
              precision.
            </p>
          </div>
        </div>
        <div className={styles.imageSection}>
          <Image src={item7} alt="previous-version" />
          <Image src={item8} alt="previous-version" />
        </div>
        <div className={styles.divide}>
          <div className={styles.subTitle}>
            <h3>My Role</h3>
            <span> UI Designer and Frontend Developer</span>
          </div>
          <div>
            <p>
              Throughout this project, I collaborated closely with the Backend
              developer to seamlessly integrate APIs and incorporate AI
              solutions into the website. My main objective was to create a user
              interface that was both simple and efficient, catering to users of
              all age groups. By focusing on usability and user experience, I
              aimed to provide a seamless and enjoyable interaction for all
              individuals accessing the website.
            </p>
          </div>
        </div>

        <div className={styles.divide}>
          <div className={styles.subTitle}>
            <h3>Implementation</h3>
            <span>Optimized the UI and built React website</span>
          </div>
          <div>
            <p>
              I optimized the website&apos;s UI and UX, improving layout,
              navigation, and visual elements. I created a unique logo to
              represent the brand. Redesigned the waveform software for better
              audio visualization. Displayed the latest account balance on page
              reload. Implemented audio format and size checks for smooth
              uploads. Utilized local storage for seamless audio access. Enabled
              non-login user permissions for wider accessibility.
            </p>
          </div>
        </div>
        <div className={styles.imageSection}>
          <Image src={item9} alt="previous-version" />
          <Image src={item10} alt="previous-version" />
        </div>
        <div className={styles.divide}>
          <div className={styles.subTitle}>
            <h3>Outcome</h3>
            <span>Achieved seamless and enjoyable interaction experience</span>
          </div>
          <div>
            <Image src={gif} alt="previous-version" className={styles.gif} />
          </div>
        </div>
        <CaseStudy case={[1, 3, 4]} />
      </div>
      <Footer />
    </>
  );
}
