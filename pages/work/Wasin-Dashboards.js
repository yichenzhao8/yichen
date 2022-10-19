/** @format */
import Navbar from "../../component/navbar";
import styles from "../../styles/WorkItem.module.scss";
import Image from "next/image";
import cover from "../../public/wasin.jpg";
import Footer from "../../component/footer";

export default function SS() {
  return (
    <>
      <div className="container">
        <Navbar text="#0F110C" position="relative" />
        <div className={styles.wrapper}>
          <h1>Wasin Dasboards</h1>
          <Image src={cover} alt="Wasin Dashboards Cover" layout="responsive" />
          <div className={styles.divide}>
            <div>
              <h3>My Role</h3>
              <br />
              <span> UI Designer &amp; Frontend Developer</span>
            </div>
            <div>
              <h3>Implementation</h3>
              <br />
              <span>Created UI design and built the JavaSript website</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
