/** @format */
import Navbar from "../../component/navbar";
import GoHome from "../../component/goHome";
import Footer from "../../component/footer";

import styles from "../../styles/WorkItem.module.scss";
import Image from "next/image";
import cover from "../../public/DBW/cover.jpg";
import showcase from "../../public/DBW/showcase.jpg";

export default function DBW() {
  return (
    <>
      <div className="container">
        <Navbar text="#1e1e1e" position="relative" />
        <h1 className={styles.h1}>DeepWave Business Website</h1>
        <Image
          src={cover}
          alt="DeepWave Business Website Cover"
          className={styles.fullimg}
        />
        <div className={styles.wrapper}>
          <p className={styles.intro}>
            DeepWave is dedicated to acoustic-related artificial intelligence
            research and has applied its solutions in the field of music
            entertainment. In order to attract new customers and expand its
            business, DeepWave has made the decision to build a company website.
          </p>
          <div className={styles.divide}>
            <div>
              <p className={styles.tit}>My Role</p>
              <br />
              <span> UI Designer &amp; Frontend Developer</span>
            </div>
            <div>
              <p>
                As a UI Designer and Frontend Developer, my primary
                responsibility involved designing and developing the website to
                effectively showcase the advanced technical features offered by
                DeepWave.
              </p>
            </div>
          </div>
          <div className={styles.divide}>
            <div>
              <h3 className={styles.tit}>Implementation</h3>
              <br />
              <span> Designed and Built the static website</span>
            </div>
            <div>
              <p>
                I designed the entire user interface (UI) for the business
                website using Sketch. This encompassed creating layouts and
                visuals for various pages, such as the Home, About, Tech, Media,
                Career, News, FAQ, Terms and Conditions, and Privacy Policy
                pages.
              </p>
              <br />
              <p>
                The website was developed using React, chosen for its excellent
                reusability and maintainability characteristics.
              </p>
            </div>
          </div>
          <Image src={showcase} alt="showcase" />
        </div>
      </div>
      <GoHome />
      <Footer />
    </>
  );
}
