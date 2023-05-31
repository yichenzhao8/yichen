/** @format */

import styles from "../styles/Index.module.scss";

import Navbar from "../component/navbar";
import Header from "../component/header";
import Work from "../component/work";
import Design from "../component/design";
import Contact from "../component/contact";
import Footer from "../component/footer";

export default function Index() {
  return (
    <>
      <Navbar />
      <Header />
      <div className={`${styles.container} work`} id="work">
        <Work />
        <div id="design">
          <Design />
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
}
