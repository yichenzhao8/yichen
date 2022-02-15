/** @format */
import Navbar from "../../component/navbar";
import Link from "../../component/link";
import styles from "../../styles/WorkItem.module.scss";
import Image from "next/image";
import cover from "../../public/Hu/cover.jpg";
import page1 from "../../public/Hu/1.png";
import Footer from "../../component/workfooter";

export default function Hullaballoo() {
  return (
    <>
      <div className="container">
        <Navbar text="#0F110C" />
        <div className={styles.wrapper}>
          <h1>Hullaballoo</h1>
          <Image src={cover} alt="Hullaballoo Cover" />
          <p>
            Hullaballoo help identify and extract the background noise to
            improve the human voice clarity in the uploaded audio file.
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
                brainstorm all the functions in the website for meeting the goal
                - able to analysis mutliple formats of audios at the same time.
              </p>
            </div>
          </div>

          <Image src={page1} alt="page1" />
          <div className={styles.divide}>
            <div>
              <h3>Implementation</h3>
              <br />
              <span>Create UI design, build React website</span>
            </div>
            <div>
              <p>
                Design
                <ul>
                  <li>Create simple and clear UI</li>
                  <li>Customize exclusive logo</li>
                </ul>
                Function
                <ul>
                  <li>Create playlist and waveform based on online module</li>
                  <li>
                    Allow mutiple audio being dragged/choosed and uploaded
                  </li>
                  <li>
                    Go over uploaded audio&prime;s format and size before
                    sending it to backend
                  </li>
                  <li>
                    Read upload result from backend and show information in
                    pop-up window
                  </li>
                  <li>
                    Redirect non-login user to login page while visiting upload
                    page
                  </li>
                  <li>Get latest account balance when page reload</li>
                </ul>
              </p>
            </div>
          </div>
          <video controls loop width="100%">
            <source src="/Hu/video.webm" type="video/webm" />
          </video>
          <Link link="https://hullaballoo.dwave.cc" />
        </div>
      </div>
      <Footer />
    </>
  );
}
