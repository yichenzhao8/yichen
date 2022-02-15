/** @format */
import Image from "next/image";
import styles from "../styles/Design.module.scss";

export default function designgrid(props) {
  return <Image src={props.img} priority={true} />;
}
