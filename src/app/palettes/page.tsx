"use client";
import React, { useEffect, useState } from "react";
import Container from "@/components/container/Container";
import styles from "./style.module.css";
import { range } from "@/utils/range";
import { getRandomHex } from "@/utils/randomHex";
import { colord } from "colord";
import { AnimatePresence, motion } from "framer-motion";
import VisuallyHidden from "@/components/VisuallyHidden/VisuallyHidden";
import Refrash from "@/icons/Refrash";
import Save from "@/icons/Save";
import LinkBack from "@/components/linkBack/LinkBack";
import CopyToclipboard from "@/components/copyToclipboardBtn/CopyToclipboard";

export default function Palettes() {
  const [colors, setColors] = useState<string[]>([]);
  const [savedPalettes, setSavedPalettes] = useState<string[][]>([]);

  const generateNewColors = () => {
    const newColors = range(0, 5).map(() => getRandomHex());
    setColors(newColors);
  };
  useEffect(() => {
    generateNewColors();
  }, []);

  const arraysEqual = (a: string[], b: string[]): boolean => {
    if (a.length !== b.length) return false;
    return a.every((value, index) => value === b[index]);
  };

  const saveCurrentPalette = () => {
    // Check if the current palette is already saved
    const isUnique = savedPalettes.every(
      (palette) => !arraysEqual(palette, colors)
    );

    if (isUnique) {
      setSavedPalettes([...savedPalettes, colors]);
    }
    // Optionally, handle the case where the palette is not unique
    // For example, you could replace an existing palette or show a message
  };

  return (
    <section className={styles.palette}>
      <Container>
        <div className={styles.controls__group}>
          <LinkBack />
          <button className={styles.button} onClick={generateNewColors}>
            <Refrash />
            <VisuallyHidden>random</VisuallyHidden>
          </button>
          <button className={styles.button} onClick={saveCurrentPalette}>
            <Save />
            <VisuallyHidden>save curent palette</VisuallyHidden>
          </button>
          <div className={styles.palettes_box}>
            <ul role="list" className={styles.list}>
              {savedPalettes.map((palette, index) => (
                <li key={index} className={styles.list__item}>
                  {palette.map((color, colorIndex) => (
                    <span
                      key={colorIndex}
                      className={styles.item}
                      style={{ backgroundColor: color }}
                    ></span>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
      <div className={styles.flex__group}>
        {colors.map((color, index) => (
          <div
            style={{ backgroundColor: `${color}` }}
            className={styles.box}
            key={index}
          >
            <AnimatePresence>
              <motion.div layout className={styles.values__box}>
                <CopyToclipboard text={color}>
                  <p>hex:{color}</p>
                </CopyToclipboard>
                <CopyToclipboard text={colord(color).toRgbString()}>
                  <p>{colord(color).toRgbString()}</p>
                </CopyToclipboard>
                <CopyToclipboard text={colord(color).toHslString()}>
                  <p>{colord(color).toHslString()}</p>
                </CopyToclipboard>
              </motion.div>
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
