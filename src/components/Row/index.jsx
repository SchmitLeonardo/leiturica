import React from "react";
import styles from "./styles.module.scss";

function Row({ width = "100%", alignItems = "center", children }) {
  return (
    <div
      className={styles.container}
      style={{ width: width, alignItems: alignItems }}
    >
      {children}
    </div>
  );
}

export default Row;
