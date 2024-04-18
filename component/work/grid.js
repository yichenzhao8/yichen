/** @format */
import Image from "next/image";
import styles from "../../styles/Work.module.scss";
import { motion } from "framer-motion";

const imageVariants = {
  beforeHover: {},
  onHover: { scale: 1.1 },
};
const titleVariants = {
  beforeHover: { opacity: 0 },
  onHover: { opacity: 1 },
};

export default function Grid(props) {
  const link = `url(../../cover-images/${props.item.img}.jpg)`;
  return (
    <motion.div
      className={styles.box}
      initial="beforeHover"
      whileHover="onHover">
      <motion.div
        className={styles.imageBox}
        variants={imageVariants}
        style={{ backgroundImage: link }}
      />
      <motion.div className={styles.imageTitle} variants={titleVariants}>
        <span>
          <Image
            priority
            src="../../icon/link.svg"
            alt="Follow us on Twitter"
            height={20}
            width={20}
          />
        </span>
      </motion.div>
    </motion.div>
  );
}
