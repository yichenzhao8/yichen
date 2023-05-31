/** @format */
import { useContext, useCallback } from "react";
import { CursorContext } from "../component/cursor/CursorContextProvider";

import styles from "../styles/Footer.module.scss";
import SocialLinkedin from "../public/socialMedia/socialLinkedin.svg";
import SocialFb from "../public/socialMedia/socialFb.svg";
import SocialIg from "../public/socialMedia/socialIg.svg";

const SocialLinks = [
  {
    id: "1",
    Icon: SocialLinkedin,
    href: "https://www.linkedin.com/in/yichenzhao8/",
  },
  {
    id: "2",
    Icon: SocialFb,
    href: "https://www.facebook.com/profile.php?id=100002213001732",
  },
  {
    id: "3",
    Icon: SocialIg,
    href: "https://www.instagram.com/8_8mih/?igshid=OGQ5ZDc2ODk2ZA%3D%3D",
  },
];

export default function footer() {
  const [cursor, setCursor] = useContext(CursorContext);
  const activeCursor = useCallback(() => {
    setCursor({ ...cursor, mode: true });
  });
  const inactiveCursor = useCallback(() => {
    setCursor({ ...cursor, mode: false });
  });
  return (
    <footer className={styles.container}>
      <ul>
        {SocialLinks.map(({ id, Icon, href }) => (
          <li
            key={id}
            onMouseEnter={activeCursor}
            onMouseLeave={inactiveCursor}
            onClick={inactiveCursor}>
            <a target="_blank" href={href} rel="noopener noreferrer">
              <Icon />
            </a>
          </li>
        ))}
      </ul>
      <span>© YiChen Zhao</span>
    </footer>
  );
}
