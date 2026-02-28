import { JSX } from "react";
import styles from "./badge.module.css";

const Badge = ({ children }: { children: JSX.Element }) => {
  return <div className={styles.badge}>{children}</div>;
};

export { Badge };
