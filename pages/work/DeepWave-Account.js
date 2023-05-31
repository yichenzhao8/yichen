/** @format */
import Navbar from "../../component/navbar";
import GoHome from "../../component/goHome";
import Footer from "../../component/footer";

import styles from "../../styles/WorkItem.module.scss";
import Image from "next/image";
import cover from "../../public/Account/cover.jpg";
import webshowcase from "../../public/Account/webshowcase.png";

export default function DA() {
  return (
    <>
      <div className="container">
        <Navbar text="#1e1e1e" position="relative" />
        <h1 className={styles.h1}>DeepWave Account System</h1>
        <Image
          src={cover}
          alt="DeepWave Account System Cover"
          className={styles.fullimg}
        />
        <div className={styles.wrapper}>
          <div className={styles.divide}>
            <div>
              <h3>My Role</h3>
              <br />
              <span> UI Designer & Frontend Developer</span>
            </div>
            <div>
              <p>
                As a frontend developer, I focused on creating a simple and
                intuitive user interface (UI) that ensures a user-friendly
                experience. This involved careful design considerations to
                facilitate easy navigation and interaction with the system.
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
                To streamline the authentication process, I implemented Google
                account login functionality, enabling users to securely log in
                using their Google accounts. This integration enhances
                convenience and security for users during the authentication
                process.
              </p>

              <p>
                Working collaboratively with the Backend Developer, we built a
                comprehensive authentication system encompassing login,
                registration, password recovery, and resend activation email
                functionalities. This robust system ensures secure account
                creation, password retrieval, and activation email resending,
                enhancing user convenience and security.
              </p>

              <p>
                Additionally, I developed a top-up page that seamlessly
                integrates with NewebPay, a trusted payment gateway provider.
                This integration allows users to securely add funds to their
                accounts using various payment methods supported by NewebPay,
                offering a seamless and convenient recharge process.
              </p>

              <p>
                To provide real-time insights, I created interactive dashboards
                that dynamically display analyzed records and transactions.
                These visually engaging dashboards empower users to monitor and
                track the latest information, facilitating data-driven
                decision-making.
              </p>

              <p>
                Furthermore, I designed and implemented a referral code feature
                that seamlessly integrates with the registration page. This
                feature enables users to enter referral codes during the
                registration process, unlocking special benefits or rewards
                associated with the referral program. This functionality fosters
                user engagement and encourages organic growth through
                word-of-mouth marketing.
              </p>
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
