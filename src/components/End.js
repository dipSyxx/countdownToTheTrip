import React from "react";
import styles from "./styles.module.sass";

export const End = () => {
  return (
    <div className={styles.end}>
      <h1>
        I'M COMING FOR YOU<span className={styles.one}>.</span>
        <span className={styles.two}>.</span>
        <span className={styles.three}>.</span>
      </h1>
      <h2>AND</h2>
      <div className={styles.love_sector}>
        <div>
          <h3>
            I <span style={{ color: "#ca1e1e" }}>LOVE</span> YOU SO MUCH
          </h3>
          <h4>AND</h4>
          <h5>I MISS YOU MY GIRL,WE WILL SEE YOU SOON</h5>
        </div>
        <div className={styles.heart}>
          <i className="fa-solid fa-heart"></i>
        </div>
      </div>
    </div>
  );
};
