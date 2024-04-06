import React, { useEffect } from "react";
import styles from "./style.module.css";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export default function MotionScene() {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #ffff 50%, ${color})`;

  return (
    <div className={styles.wrapper}>
      <motion.div
        className={styles.cube}
        style={{
          backgroundImage,
        }}
      ></motion.div>
      <motion.div
        className={styles.cube}
        animate={{
          x: [0, 0, 50, 0, 0],
          y: [0, 0, -50, 0, 0],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      ></motion.div>
      <motion.div
        className={styles.cube}
        animate={{
          x: [0, 0, -50, 0, 0],
          y: [0, 0, 50, 0, 0],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      ></motion.div>
      <motion.div
        className={styles.cube}
        style={{
          backgroundImage,
        }}
      ></motion.div>
    </div>
  );
}
