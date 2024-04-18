/** @format */
import Navbar from "../../component/navbar/navbar";
import CaseStudy from "../../component/caseStudy";
import Footer from "../../component/footer/footer";

import styles from "../../styles/WorkItem.module.scss";
import Image from "next/image";
import cover from "../../public/cover-images/hullaballooCover.jpg";
import item12 from "../../public/project-images/hullaballoo/items-12.jpg";
import item13 from "../../public/project-images/hullaballoo/items-13.jpg";

export default function Hullaballoo() {
  return (
    <>
      <Navbar />

      <div className={styles.wrapper}>
        <h1 className={styles.title}>Hullaballoo</h1>

        <Image
          src={cover}
          alt="Hullaballoo Cover"
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
                <span>Audio Service</span>
              </div>
            </div>
          </div>
          <div>
            <p>
              Hullaballoo is a tool designed to identify and extract background
              noise from audio or video files. Its purpose is to enhance the
              clarity of human voices by reducing unwanted noise and improving
              overall audio quality.
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
              Throughout this project, I collaborated closely with the Backend
              Developer to brainstorm and define all the necessary functions for
              the service, aligning with the project goal of being able to
              analyze multiple formats of audio simultaneously. By working
              together, we ensured that the service could effectively handle and
              process various audio formats, enabling efficient analysis and
              meeting the desired project objectives.
            </p>
          </div>
        </div>
        <div className={styles.imageSection}>
          <Image src={item12} alt="previous-version" />
          <Image src={item13} alt="previous-version" />
        </div>
        <div className={styles.divide}>
          <div className={styles.subTitle}>
            <h3>Implementation</h3>

            <span>Created the UI design and built the React website</span>
          </div>
          <div>
            <p>
              I designed a simple and intuitive user interface (UI) that
              prioritizes clarity and ease of use. The UI was crafted to provide
              a seamless user experience and facilitate efficient navigation.
              Additionally, I created a customized and exclusive logo that
              captures the unique identity of the brand. The logo was tailored
              to reflect the essence of the service and establish a distinct
              visual representation.
            </p>
            <p>In the project, I implemented the following features:</p>
            <ul>
              <li>
                Created a customizable playlist and waveform using open-source
                software. This allowed users to have a personalized and visually
                engaging audio playback experience.
              </li>
              <li>
                Enabled the ability to select and upload multiple audio files by
                implementing a drag-and-drop functionality. This streamlined the
                process of uploading multiple files simultaneously.
              </li>
              <li>
                Implemented checks to validate the format and size of uploaded
                audio files before sending them to the backend. This ensured
                compatibility and prevented any potential issues during
                processing.
              </li>
              <li>
                Integrated functionality to retrieve upload results from the
                backend and display the information in a pop-up window. Users
                could easily view important information related to their
                uploads.
              </li>
              <li>
                Implemented a redirection mechanism that redirected non-login
                users to the login page when attempting to access the upload
                page. This ensured that only authenticated users could access
                the upload functionality.
              </li>
              <li>
                Provided the latest account balance information on every page
                reload, offering real-time updates to users regarding their
                account status.
              </li>
            </ul>
          </div>
        </div>
        {/* <video autoPlay loop muted>
            <source src="/Hu/video.webm" type="video/webm" />
          </video> */}
        <CaseStudy case={[4, 5, 6]} />
      </div>

      <Footer />
    </>
  );
}
