/** @format */
import Navbar from "../../component/navbar";

import styles from "../../styles/WorkItem.module.scss";
import Image from "next/image";
import cover from "../../public/DBW/cover.jpg";
import page1 from "../../public/DBW/1.png";
import page2 from "../../public/DBW/2.png";
import Footer from "../../component/footer";

export default function DBW() {
  return (
    <>
      <div className="container">
        <Navbar text="#0F110C" position="relative" />
        <div className={styles.wrapper}>
          <h1>DeepWave Business Website</h1>
          <Image
            src={cover}
            alt="DeepWave Business Website Cover"
            layout="responsive"
          />
          <p className={styles.intro}>
            DeepWave dedicates to acoustic-related artificial intelligence
            research and has applied solutions in music entertainment. To
            attract new customers and grow its business, DeepWave decided to
            build a company website.
          </p>
          <div className={styles.divide}>
            <div>
              <h3>My Role</h3>
              <br />
              <span> UI Designer &amp; Frontend Developer</span>
            </div>
            <div>
              <p>
                I was responsible for designing and building the website to
                present the technical features of DeepWave.
              </p>
            </div>
          </div>
          <div className={styles.divide}>
            <div>
              <h3>Implementation</h3>
              <br />
              <span> Designed and Built the static website</span>
            </div>
            <div>
              <p>
                Design
                <ul>
                  <li>
                    Designed all the UI of the business websites with Sketch,
                    including Home page, About page, Tech page, Media page,
                    Career page, News page, FAQ page, Terms and Condition page
                    and Privacy Policy page.
                  </li>
                </ul>
                Function
                <p>
                  The website was built with React because of its reusability
                  and maintainability.
                </p>
              </p>
            </div>
          </div>
          <Image src={page1} alt="page1" />
          <div className={styles.alt}>Home page</div>

          <Image src={page2} alt="page2" />
          <div className={styles.alt}>Tech page, Media page, Career page</div>
        </div>
      </div>
      <Footer />
    </>
  );
}
