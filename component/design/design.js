/** @format */

import { useState } from "react";
import Project from "./designProject";
import Modal from "./modal";
import styles from "../../styles/Design.module.scss";

const projects = [
  {
    title: "Web design",
    src: "webDesign",
    color: "#000000",
  },
  {
    title: "Mobile app design",
    src: "MobileDesign",
    color: "#8C8C8C",
  },
  {
    title: "Graphics",
    src: "graphic",
    color: "#EFE8D3",
  },
  {
    title: "Branding",
    src: "branding",
    color: "#706D63",
  },
];

export default function Design() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <section className={styles.main}>
      <div className={styles.body}>
        <div className={styles.title}>
          <span>Services</span>
          <p>
            My services include design expertise in web design, mobile app
            design, graphics, and branding, alongside web development.
          </p>
        </div>
        <div>
          {projects.map((project, index) => {
            return (
              <Project
                index={index}
                title={project.title}
                setModal={setModal}
                key={index}
              />
            );
          })}
        </div>
      </div>
      <Modal modal={modal} projects={projects} />
    </section>
  );
}
