/** @format */
import Navbar from "../../component/navbar";

import styles from "../../styles/WorkItem.module.scss";
import Image from "next/image";
import cover from "../../public/Hu/cover.jpg";
import page1 from "../../public/Hu/1.png";
import Footer from "../../component/footer";

export default function Hullaballoo() {
  return (
    <>
      <div className="container">
        <Navbar text="#0F110C" position="relative" />
        <div className={styles.wrapper}>
          <h1>Hullaballoo</h1>
          <Image src={cover} alt="Hullaballoo Cover" layout="responsive" />
          <p className={styles.intro}>
            Hullaballoo helps to identify and extract the background noise from
            a provided audio or video to improve the human voice clarity.
          </p>
          <div className={styles.divide}>
            <div>
              <h3>My Role</h3>
              <br />
              <span> UI Designer &amp; Frontend Developer</span>
            </div>
            <div>
              <p>
                In this project, I worked closely with the Backend Developer to
                brainstorm all the functions of the service to meeting the
                project goal - be able to analysis mutliple formats of audios at
                the same time.
              </p>
            </div>
          </div>

          <Image src={page1} alt="page1" />
          <div className={styles.divide}>
            <div>
              <h3>Implementation</h3>
              <br />
              <span>Created the UI design and built the React website</span>
            </div>
            <div>
              <p>
                Design
                <ul>
                  <li>Created simple and clear UI</li>
                  <li>Customized exclusive logo</li>
                </ul>
                Function
                <ul>
                  <li>
                    Created customize playlist and waveform based on open-source
                    software.
                  </li>
                  <li>
                    Allowed mutiple audios being dragged/selected and uploaded.
                  </li>
                  <li>
                    Checked the uploaded audio&apos;s format and size before
                    sending to the backend.
                  </li>
                  <li>
                    Read upload results from the backend and show the
                    information in pop-up window.
                  </li>
                  <li>
                    Redirected non-login user to login page while visiting
                    upload page.
                  </li>
                  <li>
                    Returned the latest account balance everytime the page
                    reloads.
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <video controls loop width="100%">
            <source src="/Hu/video.webm" type="video/webm" />
          </video>
        </div>
      </div>
      <Footer />
    </>
  );
}
