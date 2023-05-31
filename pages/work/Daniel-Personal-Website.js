/** @format */
import Navbar from "../../component/navbar";
import GoHome from "../../component/goHome";
import Footer from "../../component/footer";

import styles from "../../styles/WorkItem.module.scss";
import Image from "next/image";
import cover from "../../public/DL/cover.jpg";
import webshowcase from "../../public/DL/webshowcase.png";

export default function Daniel() {
  return (
    <>
      <div className="container page">
        <Navbar text="#1e1e1e" position="relative" />
        <h1 className={styles.h1}>Personal Website</h1>
        <Image src={cover} alt="Sovia Cover" className={styles.fullimg} />
        <div className={styles.wrapper}>
          <div className={styles.divide}>
            <div>
              <h3>My Role</h3>
              <br />
              <span> UI Designer &amp; Frontend Developer</span>
            </div>

            <div>
              <h3>Implementation</h3>
              <br />
              <span>
                Designed the website&apos;s UI and built Shopify website using
                Liquid
              </span>
            </div>
          </div>

          <Image src={webshowcase} alt="webshowcase" />
        </div>
      </div>
      <GoHome />
      <Footer />
    </>
  );
}
