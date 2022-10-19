/** @format */

import styles from "../styles/Index.module.scss";

import Head from "../component/head";
import Navbar from "../component/navbar";
import Header from "../component/header";
import Work from "../component/work";
import Design from "../component/design";
import Footer from "../component/footer";

export default function Index() {
  return (
    <>
      <div>
        <Navbar text="#CECCCC" />
        <Head />
        <Header />
        <div className={styles.container}>
          <Work />
          <Design />
        </div>
        <Footer />
      </div>
    </>
  );
}
