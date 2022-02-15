/** @format */
import Navbar from "../../component/navbar";
import Link from "../../component/link";
import styles from "../../styles/WorkItem.module.scss";
import Image from "next/image";
import cover from "../../public/DBW/cover.jpg";
import page1 from "../../public/DBW/1.png";
import page2 from "../../public/DBW/2.png";
import Footer from "../../component/workfooter";

export default function DBW() {
  return (
    <>
      <div className="container">
        <Navbar text="#0F110C" />
        <div className={styles.wrapper}>
          <h1>DeepWave Business Website</h1>
          <Image src={cover} alt="DeepWave Business Website Cover" />
          <p>
            DeepWave dedicates to acoustic-related artificial intelligence
            research and development, and has applied solutions in music
            entertainment. To clearly describe solutions and sell services to
            potential clients, DeepWave decided to build a company website.
          </p>
          <div className={styles.divide}>
            <div>
              <h3>My Role</h3>
              <br />
              <span> UI Designer &amp; Frontend Developer</span>
            </div>
            <div>
              <p>
                I was responsible for designing and building the website,
                working closely with Project Manager to communicate the
                technical features and goals of the project.
              </p>
            </div>
          </div>
          <div className={styles.divide}>
            <div>
              <h3>Implementation</h3>
              <br />
              <span> Design and Building static website</span>
            </div>
            <div>
              <p>
                I designed the user interface with Sketch and then built the
                website with React because of its reusability and
                maintainability, including Home page, About page, Tech page,
                Career page, News page, FAQ page, Terms and Condition page and
                Privacy Policy page.
              </p>
            </div>
          </div>
          <Image src={page1} alt="page1" />

          <Image src={page2} alt="page2" />
          <Link link="https://dwave.cc" />
        </div>
      </div>
      <Footer />
    </>
  );
}
