import React from "react";
import Back from "@/icons/Back";
import Link from "next/link";
import VisuallyHidden from "../VisuallyHidden/VisuallyHidden";
import styles from "./style.module.css"

export default function LinkBack() {
  return (
    <Link href={"/"} className={styles.link}>
      <Back />
      <VisuallyHidden>back to home page</VisuallyHidden>
    </Link>
  );
}
