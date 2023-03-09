import React from "react";
import styles from "./Card.module.css";

const sampleImg = require("../../assets/sampleCardImg.jpeg");

function Card() {
  return (
    <div className={styles.card}>
      <img src={sampleImg} alt="CardImage" />
      <section className={styles.section}>
        <div className={styles.followsPill}>100M Follows . 1T</div>
      </section>
      <header className={styles.collections}>New Bollywood</header>
    </div>
  );
}

export default Card;
