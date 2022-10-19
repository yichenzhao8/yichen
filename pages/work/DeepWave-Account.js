/** @format */
import Navbar from "../../component/navbar";

import styles from "../../styles/WorkItem.module.scss";
import Image from "next/image";
import cover from "../../public/Account/cover.jpg";
import login from "../../public/Account/login.png";
import pricing from "../../public/Account/pricing.png";
import dashboards from "../../public/Account/dashboard.png";
import Footer from "../../component/footer";

export default function DA() {
  return (
    <>
      <div className="container">
        <Navbar text="#0F110C" position="relative" />
        <div className={styles.wrapper}>
          <h1>DeepWave Account System</h1>
          <Image
            src={cover}
            alt="DeepWave Account System Cover"
            layout="responsive"
          />
          <div className={styles.divide}>
            <div>
              <h3>My Role</h3>
              <br />
              <span> UI Designer & Frontend Developer</span>
            </div>
            <div>
              <p>
                In this user system, I worked closely with the Backend Developer
                to
              </p>
            </div>
          </div>
          <div className={styles.divide}>
            <div>
              <h3>Implementation</h3>
              <br />
              <span>Created the UI design and built React website</span>
            </div>
            <div>
              <p>
                Design
                <ul>
                  <li>Created simple and clear UI.</li>
                </ul>
                Function
                <ul>
                  <li>Accepted Google account login.</li>
                  <li>
                    Built login, register, forget password, resend activate
                    letter system with the Backend Developer.
                  </li>
                  <li>Created top-up page with NewebPay.</li>
                  <li>
                    Made interactive dashboards that display real-time analyzed
                    records and transactions.
                  </li>
                  <li>
                    Designed referral code feature and linked with register
                    page.
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <Image src={login} alt="login" />
          <div className={styles.alt}>
            Login page, Register page, Forget password page, Pricing page
          </div>

          <Image src={pricing} alt="pricing" />
          <div className={styles.alt}>Pricing page, Top-up page</div>
          <Image src={dashboards} alt="dashbord" />
          <div className={styles.alt}>Dashboards</div>
        </div>
      </div>
      <Footer />
    </>
  );
}
