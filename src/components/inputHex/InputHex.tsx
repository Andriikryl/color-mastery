import React, { useEffect } from "react";
import styles from "./style.module.css";
import clsx from "clsx";
import { getRandomHex } from "@/utils/randomHex";

interface InputProps {
  labelTitle: string;
  value: string;
  set: (newValue: string) => void;
}

export default function InputHex({ set, value, labelTitle }: InputProps) {
  return (
    <div className={styles.inputHex__box}>
      <form
        className={styles.form}
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label className={styles.label} htmlFor="name-field">
          {labelTitle}
        </label>
        <input
          className={clsx(styles.input, {
            // [styles.input__erro]: error === true,
          })}
          id="name-field"
          value={value}
          onChange={(event) => set(event.target.value)}
        />
      </form>
    </div>
  );
}
