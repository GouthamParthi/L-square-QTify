import React from "react";
import styles from "./Card.module.css";

function Card({ title, image, follows, likes }) {
  return (
    <div className={styles.card}>
      <img src={image} alt="CardImage" loading="lazy" />
      <section className={styles.decriptionArea}>
        <div className={styles.followsPill}>
          {likes !== undefined ? `${likes} Likes` : `${follows} Follows`}
        </div>
      </section>
      <header className={styles.collections}>{title}</header>
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
