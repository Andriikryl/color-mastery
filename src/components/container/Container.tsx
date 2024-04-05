import React, { ReactNode } from "react";
import styles from "./style.module.css";

interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return <div className={styles.wrapper}>{children}</div>;
}
