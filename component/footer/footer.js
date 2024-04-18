/** @format */
import { useContext, useCallback } from "react";
import { CursorContext } from "../cursor/CursorContextProvider";
import styles from "../../styles/Footer.module.scss";

const SocialLinks = [
  {
    id: "1",
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/yichenzhao8/",
    alt: "LinkedIn",
  },
  {
    id: "2",
    name: "Instagram",
    href: "https://www.instagram.com/8_8mih/?igshid=OGQ5ZDc2ODk2ZA%3D%3D",
    alt: "Instagram",
  },
];

export default function footer() {
  const [cursor, setCursor] = useContext(CursorContext);
  const activeCursor = useCallback(() => {
    setCursor({ ...cursor, mode: true, active: true });
  });
  const modeactiveCursor = useCallback(() => {
    setCursor({ ...cursor, mode: true });
  });
  const modeinactiveCursor = useCallback(() => {
    setCursor({ ...cursor, mode: true, active: false });
  });
  const inactiveCursor = useCallback(() => {
    setCursor({ ...cursor, mode: false, active: false });
  });
  return (
    <footer
      className={styles.container}
      onMouseEnter={modeactiveCursor}
      onMouseLeave={inactiveCursor}>
      <div className={styles.content}>
        <div className={styles.title}>
          Let's work <br />
          together
        </div>
        <div className={styles.contact}>
          <a
            href="mailto:yichenzhao8@gmail.com"
            target="_blank"
            onMouseEnter={activeCursor}
            onMouseLeave={modeinactiveCursor}
            onClick={inactiveCursor}>
            <span>yichenzhao8@gmail.com</span>
          </a>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <ul>
          {SocialLinks.map(({ id, name, href, icon, alt }) => (
            <li
              key={id}
              onMouseEnter={activeCursor}
              onMouseLeave={modeinactiveCursor}
              onClick={inactiveCursor}>
              <a target="_blank" href={href} rel="noopener noreferrer">
                <span>{name}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className={styles.copyRight}>
          Design and Develope by YI-CHEN ZHAO © 2024 All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
