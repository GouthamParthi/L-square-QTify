import Card from "../Card/Card";
import React from "react";
import styles from "./Carousel.module.css";
function Carousel({ listOfSongs }) {
  return (
    <div className={styles.carousel}>
      {listOfSongs.map((songs) => {
        return (
          <>
            <Card songs={songs} />
          </>
        );
      })}
    </div>
  );
}

export default Carousel;
