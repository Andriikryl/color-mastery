"use client";
import React, { useEffect, useState } from "react";
import Container from "@/components/container/Container";
import { Title } from "@/components/title/Title";
import styles from "./style.module.css";
import { getRandomHex } from "@/utils/randomHex";
import { HexColorPicker } from "react-colorful";
import InputHex from "@/components/inputHex/InputHex";
import { colord, extend } from "colord";
import labPlugin from "colord/plugins/lab";
import LinkBack from "@/components/linkBack/LinkBack";
extend([labPlugin]);
export default function Compare() {
  const [firstColor, setFirstColor] = useState("");
  const [secondColor, setSecondColor] = useState("");

  useEffect(() => {
    setFirstColor(getRandomHex());
  }, []);
  useEffect(() => {
    setSecondColor(getRandomHex());
  }, []);

  let delta = colord(firstColor).delta(secondColor);

  return (
    <section className={styles.compare__section}>
      <Container>
        <div className={styles.wrapper}>
          <LinkBack />
          <Title headingLevel="h1">Compare</Title>
          <div className={styles.compare__box}>
            <div className={styles.control__group}>
              <div className={styles.flex__group}>
                <InputHex
                  set={setFirstColor}
                  value={firstColor}
                  labelTitle="First color"
                />
                <HexColorPicker color={firstColor} onChange={setFirstColor} />
              </div>
              <div className={styles.flex__group}>
                <InputHex
                  set={setSecondColor}
                  value={secondColor}
                  labelTitle="Second color"
                />
                <HexColorPicker color={secondColor} onChange={setSecondColor} />
              </div>
            </div>
            <div className={styles.ex__block}>
              <div
                className={styles.axis__box}
                style={{ backgroundColor: `${firstColor}` }}
              >
                <div className={styles.axis__x}></div>
                <div className={styles.axis__y}></div>
                <div className={styles.axis__z}>
                  <p className={styles.delta}>DeltaE:{delta}</p>
                </div>
                <div
                  className={styles.axis__child}
                  style={{ backgroundColor: `${secondColor}` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
