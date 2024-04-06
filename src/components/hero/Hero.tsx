"use client";
import React from "react";
import { range } from "@/utils/range";
import styles from "./style.module.css";
import { motion } from "framer-motion";
import { Nav } from "../nav/Nav";
import MotionScene from "../motionScene/MotionScene";

const colors = ["#d62828", "#ffbe0b", "#ffb3c6", "#c8b6ff", "#80ed99"];

export function Hero() {
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };
  return (
    <section className={styles.hero}>
      <div className={styles.bg__box}>
        {range(0, 180).map((item, index) => {
          return (
            <motion.div
              className={styles.box}
              key={index}
              whileHover={{
                backgroundColor: `${getRandomColor()}`,

                transition: {
                  duration: 0.3,
                },
              }}
            ></motion.div>
          );
        })}
      </div>
      <div className={styles.flex__group}>
        <h1 className={styles.title}>Colors</h1>
        <MotionScene />
        <Nav />
      </div>
    </section>
  );
}
