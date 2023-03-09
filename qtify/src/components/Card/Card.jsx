import React from "react";
import styles from "./Card.module.css";

const sampleImg = require("../../assets/sampleCardImg.jpeg");

function Card({ songs }) {
  console.log(`https://image.tmdb.org/t/p/w500${songs.poster_path}`);
  return (
    <div className={styles.card}>
      <img
        src={`https://image.tmdb.org/t/p/w500${songs.poster_path}`}
        alt="CardImage"
      />
      <section className={styles.section}>
        <div className={styles.followsPill}>
          {Math.floor(songs.popularity)}M Follows . 1T
        </div>
      </section>
      <header className={styles.collections}>{songs.original_title}</header>
    </div>
  );
}
// function Card({ songs }) {
//   return (
//     <div className={styles.card}>
//       <img src={sampleImg} alt="CardImage" />
//       <section className={styles.section}>
//         <div className={styles.followsPill}>100M Follows . 1T</div>
//       </section>
//       <header className={styles.collections}>New Bollywood</header>
//     </div>
//   );
// }
export default Card;
