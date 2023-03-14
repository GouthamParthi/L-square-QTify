import React from "react";
import Carousel from "../Carousal/Carousel";
import styles from "./Section.module.css";

function Section({ title, listOfSongs }) {
  return (
    <div className={styles.section}>
      <div className={styles.sectionHeader}>
        <header>{title}</header>
        <button>Show All</button>
      </div>

      {/*filter*/}
      <Carousel listOfSongs={listOfSongs} />
    </div>
  );
}

export default Section;
