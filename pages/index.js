/** @format */
import styles from "../styles/Index.module.scss";

import Navbar from "../component/navbar/navbar";
import Header from "../component/header";
import Work from "../component/work/work";
import Design from "../component/design/design";
import Footer from "../component/footer/footer";

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
      <Footer />
    </>
  );
}
