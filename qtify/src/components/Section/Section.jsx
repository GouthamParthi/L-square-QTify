import React, { useState } from "react";
import Carousel from "../Carousel/Carousel";
import styles from "./Section.module.css";
import Card from "../Card/Card";
function Section({ type, albums }) {
  const [carouselOn, setCarouselOn] = useState(true);
  const handleToggle = () => {
    setCarouselOn((prev) => !prev);
  };
  return (
    <div className={styles.section}>
      <div className={styles.sectionHeader}>
        <header>
          <h4>{type}</h4>
        </header>
        <button className={styles.showAllButton} onClick={handleToggle}>
          <h4>{carouselOn ? "Show all" : "Collapse"}</h4>
        </button>
      </div>

      {/*filter*/}
      <div className={styles.card}>
        {!carouselOn ? (
          albums.map((album) => {
            return (
              <Card
                key={album.id}
                title={album.title}
                image={album.image}
                follows={album.follows}
              />
            );
          })
        ) : (
          <Carousel
            albums={albums}
            renderComponent={(id, title, image, follows) => (
              <Card key={id} title={title} image={image} follows={follows} />
            )}
          />
        )}
      </div>
    </div>
  );
}

export default Section;
