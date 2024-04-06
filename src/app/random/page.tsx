"use client";
import Container from "@/components/container/Container";
import { getRandomHex } from "@/utils/randomHex";
import { range } from "@/utils/range";
import styles from "./style.module.css";
import { useEffect, useState } from "react";
import Plus from "@/icons/Plus";
import VisuallyHidden from "@/components/VisuallyHidden/VisuallyHidden";
import Minus from "@/icons/Minus";
import { Counter } from "@/components/counter/Counter";
import LinkBack from "@/components/linkBack/LinkBack";

export default function Random() {
  const [amount, setAmount] = useState(16);
  const [colors, setColors] = useState<string[]>([]);
  useEffect(() => {
    const newColors = range(0, amount).map(() => getRandomHex());
    setColors(newColors);
  }, [amount]);
  function Increment() {
    setAmount(amount + 1);
  }
  function Dicrement() {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  }
  return (
    <section className={styles.random__section}>
      <Container>
        <div className={styles.group__box}>
          <LinkBack />
          <h1 className={styles.title}>Random Color Generator</h1>
          <div className={styles.control__group}>
            <button className={styles.button} onClick={Increment}>
              <Plus />
              <VisuallyHidden>Increment</VisuallyHidden>
            </button>
            <Counter value={amount} />
            <button className={styles.button} onClick={Dicrement}>
              <Minus />
              <VisuallyHidden>decriment</VisuallyHidden>
            </button>
          </div>
          <div className={styles.palette__wrapper}>
            {colors.map((color, index) => (
              <div className={styles.wrapper__box} key={index}>
                <div
                  className={styles.palette__box}
                  style={{ backgroundColor: `${color}` }}
                ></div>
                <div className={styles.palette__values}>
                  <p className={styles.hex__color}>
                    hex:
                    {color}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
