import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer>
      <p>
        Made by{" "}
        <a className={styles.anchor} href="https://github.com/ritaban06">
          Ritaban Ghosh
        </a>
      </p>
    </footer>
  );
}
