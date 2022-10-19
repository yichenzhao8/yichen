/** @format */
import Navbar from "../../component/navbar";

import styles from "../../styles/WorkItem.module.scss";
import Image from "next/image";
import cover from "../../public/Sovia/cover.jpg";
import page1 from "../../public/Sovia/1.png";
import font from "../../public/Sovia/font.png";
import logo from "../../public/Sovia/logo.png";
import logo1 from "../../public/Sovia/logo1.jpg";
import Footer from "../../component/footer";

export default function Sovia() {
  return (
    <>
      <div className="container">
        <Navbar text="#0F110C" position="relative" />
        <div className={styles.wrapper}>
          <h1>Sovia</h1>
          <Image src={cover} alt="Sovia Cover" />
          <p className={styles.intro}>
            Sovia is a singing voice separation system. It separates voice and
            background music from a given youtube link or a audio file. It aims
            to provide unprecedented singing and listening experience.
          </p>
          <div className={styles.divide}>
            <div>
              <h3>My Role</h3>
              <br />
              <span> UI Designer &amp; Frontend Developer</span>
            </div>
            <div>
              <p>
                In this project, I worked closely with Backend developer to
                integrate APIs, bring AI solutions to the website. I aimed to
                creating a user interface as simple and efficient as possible
                for all age groups.
              </p>
            </div>
          </div>
          <Image src={page1} alt="page1" />
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
                Design
                <ul>
                  <li>
                    Optimized website&apos;s UI and UX for a better user
                    experience.
                  </li>
                  <li>Customized exclusive logo.</li>
                </ul>
                Function
                <ul>
                  <li>
                    Redesigned and revised the waveform open-source software to
                    generate a more suitable waveform to the service.
                  </li>
                  <li>
                    Returned the latest account balance everytime the page
                    reloads.
                  </li>
                  <li>
                    Checked the uploaded audio&apos;s format and size before
                    sending to the backend.
                  </li>
                  <li>Stored and retrieved the audio by using localstorage</li>
                  <li>Added permission to non-login users</li>
                </ul>
              </p>
            </div>
          </div>
          <div className={styles.divide}>
            <div>
              <h3>Design</h3>
              <br />
              <span>Colors &amp; Typography</span>
            </div>
            <div className={styles.grid}>
              <div style={{ background: "#0b89aa" }}></div>
              <div style={{ background: "#5facd3" }}></div>
              <div style={{ background: "#333e46" }}></div>
              <div style={{ background: "#a2b4bf" }}></div>
              <Image src={font} alt="font" />
            </div>
          </div>
          <div className={styles.divide}>
            <div>
              <span>Logo</span>
            </div>
            <div>
              <Image src={logo} alt="logo" />
              <Image src={logo1} alt="logo1" />
            </div>
          </div>
          <video controls loop>
            <source src="/Sovia/video.webm" type="video/webm" />
          </video>
        </div>
      </div>
      <Footer />
    </>
  );
}
