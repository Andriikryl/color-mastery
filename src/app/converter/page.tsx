"use client";
import React, { useEffect, useState } from "react";
import Container from "@/components/container/Container";
import { getRandomHex } from "@/utils/randomHex";
import { colord, extend } from "colord";
import { motion } from "framer-motion";
import styles from "./style.module.css";
import { Title } from "@/components/title/Title";
import InputHex from "@/components/inputHex/InputHex";
import hwbPlugin from "colord/plugins/hwb";
import labPlugin from "colord/plugins/lab";
import lchPlugin from "colord/plugins/lch";
import xyzPlugin from "colord/plugins/xyz";
import LinkBack from "@/components/linkBack/LinkBack";
extend([hwbPlugin]);
extend([labPlugin]);
extend([lchPlugin]);
extend([xyzPlugin]);

export default function Converter() {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);

  useEffect(() => {
    setValue(getRandomHex());
  }, []);

  let valueRgb = colord(value).toRgbString();
  let valueHsl = colord(value).toHslString();
  let valueHwb = colord(value).toHwbString();
  let valueLsh = colord(value).toLchString();
  let valueLab = colord(value).toLab();
  let valueXyz = colord(value).toXyz();
  return (
    <section className={styles.convert__section}>
      <Container>
        <div className={styles.wrapper}>
          <LinkBack />
          <Title headingLevel="h1">Convert</Title>
          <div className={styles.flex__group}>
            <div className={styles.main__box}>
              <InputHex labelTitle="hex" value={value} set={setValue} />
              <ul className={styles.values__list} role="list">
                <li className={styles.list__item}>{valueRgb}</li>
                <li className={styles.list__item}>{valueHsl}</li>
                <li className={styles.list__item}>{valueHwb}</li>
                <li className={styles.list__item}>{valueLsh}</li>
                <li className={styles.list__item}>
                  lab: {valueLab.l},{valueLab.a},{valueLab.b},{valueLab.alpha}
                </li>
              </ul>
            </div>
            <div className={styles.sidebar}>
              <div className={styles.axies}>
                <div
                  style={{ backgroundColor: value }}
                  className={styles.axies__side}
                ></div>
                <div
                  style={{ backgroundColor: value }}
                  className={styles.axies__side}
                ></div>
                <div
                  style={{ backgroundColor: value }}
                  className={styles.axies__side}
                ></div>
                <div
                  style={{ backgroundColor: value }}
                  className={styles.axies__side}
                ></div>
                <div
                  style={{ backgroundColor: value }}
                  className={styles.axies__side}
                ></div>
                <div
                  style={{ backgroundColor: value }}
                  className={styles.axies__side}
                ></div>
                <div
                  style={{ backgroundColor: value }}
                  className={styles.axies__side}
                ></div>
                <div
                  style={{ backgroundColor: value }}
                  className={styles.axies__side}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
