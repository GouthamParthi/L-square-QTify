import React from "react";
import styles from "./Card.module.css";

function Card({ songs }) {
  console.log(songs);
  return (
    <div className={styles.card}>
      <img src={songs.image} alt="CardImage" />
      <section className={styles.section}>
        <div className={styles.followsPill}>{songs.likes}Follows</div>
      </section>
      <header className={styles.collections}>{songs.title}</header>
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
