/** @format */
import Navbar from "../../component/navbar";
import GoHome from "../../component/goHome";
import Footer from "../../component/footer";

import styles from "../../styles/WorkItem.module.scss";
import Image from "next/image";
import cover from "../../public/Sovia/cover.jpg";
import compare from "../../public/Sovia/compare.png";
import logo from "../../public/Sovia/logo.png";

export default function Sovia() {
  return (
    <>
      <div className="container">
        <Navbar text="#1e1e1e" position="relative" />
        <h1 className={styles.h1}>Sovia</h1>
        <Image src={cover} alt="Sovia Cover" className={styles.fullimg} />
        <div className={styles.wrapper}>
          <p className={styles.intro}>
            Sovia is an advanced singing voice separation system specifically
            designed to separate vocals and background music from various
            sources such as YouTube links or audio files. Its primary objective
            is to deliver an unparalleled singing and listening experience by
            extracting and isolating the vocals with exceptional precision.
          </p>
          <div className={styles.divide}>
            <div>
              <h3>My Role</h3>
              <br />
              <span> UI Designer &amp; Frontend Developer</span>
            </div>
            <div>
              <p>
                Throughout this project, I collaborated closely with the Backend
                developer to seamlessly integrate APIs and incorporate AI
                solutions into the website. My main objective was to create a
                user interface that was both simple and efficient, catering to
                users of all age groups. By focusing on usability and user
                experience, I aimed to provide a seamless and enjoyable
                interaction for all individuals accessing the website.
              </p>
            </div>
          </div>
          <Image src={compare} alt="previous-version" />
          <div className={styles.divide}>
            <div>
              <h3>Implementation</h3>
              <br />
              <span>
                Optimized the website&apos;s UI and built React website
              </span>
            </div>
            <div>
              <p>
                I optimized the website&apos;s UI and UX, improving layout,
                navigation, and visual elements. I created a unique logo to
                represent the brand. Redesigned the waveform software for better
                audio visualization. Displayed the latest account balance on
                page reload. Implemented audio format and size checks for smooth
                uploads. Utilized local storage for seamless audio access.
                Enabled non-login user permissions for wider accessibility.
              </p>
            </div>
          </div>
          <div className={styles.divide}>
            <div>
              <h3>Logo</h3>
            </div>
            <div>
              <Image src={logo} alt="font" />
            </div>
          </div>

          <video autoPlay loop muted>
            <source src="/Sovia/video.webm" type="video/webm" />
          </video>
        </div>
      </div>
      <GoHome />
      <Footer />
    </>
  );
}
