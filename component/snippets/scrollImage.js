/** @format */

import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";

const mainVariant = {
  entering: { visibility: "hidden" },
  entered: { visibility: "visible" },
};

const ScrollImage = ({ children }) => {
  // const [dynamicHeight, setDynamicHeight] = useState(null);
  // const containerRef = useRef(null);
  // const galleryRef = useRef(null);
  // const yMotionValue = useMotionValue(0);
  // useEffect(() => {
  //   const calcDynamicHeight = (galleryWidth) => {
  //     const vw = window.innerWidth;
  //     const vh = window.innerHeight;
  //     const dynamicHeight = galleryWidth - vw + vh;
  //     return dynamicHeight;
  //   };
  //   const handleDynamicHeight = (ref) => {
  //     const galleryWidth = ref.current.scrollWidth;
  //     const dynamicHeight = calcDynamicHeight(galleryWidth);
  //     setDynamicHeight(dynamicHeight);
  //   };
  //   const applyScrollListener = (ref) => {
  //     const setTranslateX = () => {
  //       const offsetTop = -ref.current.offsetTop;
  //       yMotionValue.set(offsetTop);
  //     };
  //     window.addEventListener("scroll", setTranslateX);
  //   };
  //   const resizeHandler = () => {
  //     handleDynamicHeight(galleryRef);
  //   };
  //   handleDynamicHeight(galleryRef);
  //   window.addEventListener("resize", resizeHandler);
  //   applyScrollListener(containerRef);
  // }, [yMotionValue]);
  // return (
  //   <motion.main variants={mainVariant} initial="entering" animate={"entered"}>
  //     <section>
  //       <div style={{ height: dynamicHeight }} className="outer-container">
  //         <div ref={containerRef} className="container">
  //           <motion.ul
  //             ref={galleryRef}
  //             style={{ x: yMotionValue }}
  //             className="gallery">
  //             {children}
  //           </motion.ul>
  //         </div>
  //       </div>
  //     </section>
  //   </motion.main>
  // );
};

export default ScrollImage;
