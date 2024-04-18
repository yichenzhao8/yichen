/** @format */
import Image from "next/image";
import Navbar from "../../component/navbar/navbar";
import CaseStudy from "../../component/caseStudy";
import Footer from "../../component/footer/footer";

import styles from "../../styles/WorkItem.module.scss";

import cover from "../../public/cover-images/accountCover.jpg";
import item14 from "../../public/project-images/account-center/items-14.jpg";
import item13 from "../../public/project-images/account-center/items-13.jpg";
import item12 from "../../public/project-images/account-center/items-12.jpg";
import item11 from "../../public/project-images/account-center/items-11.jpg";

export default function DA() {
  return (
    <>
      <Navbar />
      <div className={styles.wrapper}>
        <h1 className={styles.title}>DeepWave Account System</h1>
        <Image
          src={cover}
          alt="DeepWave Account System Cover"
          className={styles.coverimg}
          style={{ objectPosition: "50% 0%" }}
        />
        <div className={styles.divide}>
          <div className={styles.details}>
            <div className={styles.combineTitle}>
              <div className={styles.subTitle}>
                <h3>Year</h3>
                <span>2021</span>
              </div>
              <div className={styles.subTitle}>
                <h3>Product</h3>
                <span>Ecommerce</span>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div className={styles.divide}>
          <div className={styles.subTitle}>
            <h3>My Role</h3>
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
          <div className={styles.subTitle}>
            <h3>Implementation</h3>

            <span>Created the UI design and built React website</span>
          </div>
          <div>
            <p>
              To streamline the authentication process, I implemented Google
              account login functionality, enabling users to securely log in
              using their Google accounts. This integration enhances convenience
              and security for users during the authentication process.
            </p>

            <p>
              Working collaboratively with the Backend Developer, we built a
              comprehensive authentication system encompassing login,
              registration, password recovery, and resend activation email
              functionalities. This robust system ensures secure account
              creation, password retrieval, and activation email resending,
              enhancing user convenience and security.
            </p>
          </div>
        </div>
        <div className={styles.imageSection}>
          <Image src={item11} alt="previous-version" />
          <Image src={item12} alt="previous-version" />
        </div>

        <div className={styles.divide}>
          <div className={styles.subTitle}></div>
          <div>
            <p>
              Additionally, I developed a top-up page that seamlessly integrates
              with NewebPay, a trusted payment gateway provider. This
              integration allows users to securely add funds to their accounts
              using various payment methods supported by NewebPay, offering a
              seamless and convenient recharge process.
            </p>

            <p>
              To provide real-time insights, I created interactive dashboards
              that dynamically display analyzed records and transactions. These
              visually engaging dashboards empower users to monitor and track
              the latest information, facilitating data-driven decision-making.
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

        <div className={styles.imageSection}>
          <Image src={item14} alt="previous-version" />
          <Image src={item13} alt="previous-version" />
        </div>

        <CaseStudy case={[3, 5, 6]} />
      </div>
      <Footer />
    </>
  );
}
