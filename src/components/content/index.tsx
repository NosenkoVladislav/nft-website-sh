import React from "react";

import styles from "./content.module.css";

const Content = ({children}: any) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {children}
      </div>
    </div>
  )
};

export default Content;