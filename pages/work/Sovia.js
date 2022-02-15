/** @format */
import Navbar from "../../component/navbar";
import Link from "../../component/link";
import styles from "../../styles/WorkItem.module.scss";
import Image from "next/image";
import cover from "../../public/Sovia/cover.jpg";
import page1 from "../../public/Sovia/1.png";
import font from "../../public/Sovia/font.png";
import logo from "../../public/Sovia/logo.png";
import logo1 from "../../public/Sovia/logo1.jpg";
import Footer from "../../component/workfooter";

export default function Sovia() {
  return (
    <>
      <div className="container">
        <Navbar text="#0F110C" />
        <div className={styles.wrapper}>
          <h1>Sovia</h1>
          <Image src={cover} alt="Sovia Cover" />
          <p>
            Sovia is a singing voice separation system. It separates voice and
            background music from the given youtube link or audio file. It aims
            to provide unprecedented singing/listening experience.
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
                integrate APIs, bring AI solutions to the web page. I aimed to
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
              <span>Optimize UI design, build React website</span>
            </div>
            <div>
              <p>
                Design
                <ul>
                  <li>Optimize UIUX to make it </li>
                  <li>Customize exclusive logo</li>
                </ul>
                Function
                <ul>
                  <li>
                    Redesign and revise online module to generate better audio
                    waveform
                  </li>
                  <li>Get latest account balance when page reload</li>
                  <li>
                    Go over uploaded audio&prime;s format and size before
                    sending it to backend
                  </li>
                  <li>
                    Store analyzed audios in playlist by using localstorage
                  </li>
                  <li>Add upload limit permission to non-login user</li>
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
          <video controls loop width="100%">
            <source src="/Sovia/video.webm" type="video/webm" />
          </video>

          <Link link="https://sovia.dwave.cc" />
        </div>
      </div>
      <Footer />
    </>
  );
}
