"use client";
import React, { useEffect } from "react";
import Container from "@/components/container/Container";
import { getRandomHex } from "@/utils/randomHex";
import { range } from "@/utils/range";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import styles from "./style.module.css";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export default function Random() {
  const color = useMotionValue(COLORS_TOP[0]);
  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

  return (
    <motion.section
      className={styles.random__section}
      style={{
        backgroundImage,
      }}
    >
      <Container>
        <div>
          <h1>Random Color Generator</h1>
          <div className={styles.palette__wrapper}>
            {range(0, 10).map((item, index) => {
              let randomColor = getRandomHex();
              return (
                <div key={index}>
                  <div
                    className={styles.palette__box}
                    style={{ backgroundColor: `${randomColor}` }}
                  ></div>
                  <div>
                    <p>
                      hex:
                      {randomColor}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </motion.section>
  );
}
