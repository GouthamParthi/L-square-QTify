import React from "react";
import styles from "./HeroSection.module.css";
const headphone = require("../../assets/vibrating-headphone.png");
function HeroSection() {
  return (
    <div className={styles.heroSection}>
      <section className={styles.container}>
        <p>100 Thousand Songs, ad-free</p>
        <p>Over thousands podcast episodes</p>
      </section>
      <img
        src={headphone}
        className={styles.headphonesImage}
        alt="vibratingHeadphone"
      />
    </div>
  );
}

export default HeroSection;
