/** @format */
import Navbar from "../../component/navbar";
import Link from "../../component/link";
import styles from "../../styles/WorkItem.module.scss";
import Image from "next/image";
import cover from "../../public/Account/cover.jpg";
import login from "../../public/Account/login.png";
import pricing from "../../public/Account/pricing.png";
import dashboards from "../../public/Account/dashboard.png";
import Footer from "../../component/workfooter";

export default function DA() {
  return (
    <>
      <div className="container">
        <Navbar text="#0F110C" />
        <div className={styles.wrapper}>
          <h1>DeepWave Account System</h1>
          <Image src={cover} alt="DeepWave Account System Cover" />
          <div className={styles.divide}>
            <div>
              <h3>My Role</h3>
              <br />
              <span> UI Designer & Frontend Developer</span>
            </div>
            <div>
              <p>
                In this account system, I worked closely with the Backend
                Developer.
              </p>
            </div>
          </div>
          <div className={styles.divide}>
            <div>
              <h3>Implementation</h3>
              <br />
              <span>Create UI design, build React website</span>
            </div>
            <div>
              <p>
                Design
                <ul>
                  <li>Create simple and clear UI</li>
                </ul>
                Function
                <ul>
                  <li>Accepted Google account login</li>
                  <li>
                    Built Login/ Register/ Forget password/ Resend activate
                    letter system with Backend Developer
                  </li>
                  <li>Created top-up page and complete order with NewebPay</li>
                  <li>
                    Made interactive dashboards that display real-time analyzed
                    record, transactions
                  </li>
                  <li>
                    Designed referral code section and link with Register page
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <Image src={login} alt="login" />
          <Image src={pricing} alt="pricing" />
          <Image src={dashboards} alt="dashbord" />

          <Link link="https://accounts.dwave.cc" />
        </div>
      </div>
      <Footer />
    </>
  );
}
