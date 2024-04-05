"use client";
import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import styles from "./style.module.css";
import Link from "next/link";
import Random from "@/icons/Random";
import VisuallyHidden from "../VisuallyHidden/VisuallyHidden";

interface AppIconProps {
  mouseX: MotionValue;
  href: string;
  title: string;
  svg: React.ReactNode;
}

const navLinks = [
  {
    id: 1,
    href: "/random",
    title: "1",
    svg: <Random />,
  },
  {
    id: 2,
    href: "/",
    title: "2",
    svg: <Random />,
  },
  {
    id: 3,
    href: "/",
    title: "3",
    svg: <Random />,
  },
  {
    id: 4,
    href: "/",
    title: "4",
    svg: <Random />,
  },
];

export function Nav() {
  let mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={styles.wrapper}
    >
      {navLinks.map((i) => (
        <AppIcon
          title={i.title}
          href={i.href}
          mouseX={mouseX}
          key={i.id}
          svg={i.svg}
        />
      ))}
    </motion.div>
  );
}

function AppIcon({ mouseX, href, title, svg }: AppIconProps) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-150, 0, 150], [40, 100, 40]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div ref={ref} style={{ width }} className={styles.box}>
      <Link className={styles.link} href={href}>
        {svg}
        <VisuallyHidden>{title}</VisuallyHidden>
      </Link>
    </motion.div>
  );
}
