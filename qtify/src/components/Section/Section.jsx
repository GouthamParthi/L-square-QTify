import React, { useEffect, useState } from "react";
import Carousel from "../Carousel/Carousel";
import styles from "./Section.module.css";
import Card from "../Card/Card";

import { fetchGenres } from "../Api/Api";
import TabsWithIndicator from "../TabsWithIndicator/TabWithIndicator";
function Section({ type, albums, genreTab, handleFilter }) {
  const [carouselOn, setCarouselOn] = useState(true);
  const handleToggle = () => {
    setCarouselOn((prev) => !prev);
  };

  const [genres, setGenres] = useState([]);
  useEffect(() => {
    const handleFetch = async () => {
      const response = await fetchGenres();
      setGenres(response);
    };
    handleFetch();
  }, []);
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
      {genreTab ? (
        <TabsWithIndicator genres={genres} handleFilter={handleFilter} />
      ) : null}
      <div className={styles.cards}>
        {!carouselOn ? (
          albums.map((album) => {
            return (
              <Card
                key={album.id}
                title={album.title}
                image={album.image}
                follows={album.follows}
                likes={album.likes}
              />
            );
          })
        ) : (
          <Carousel
            albums={albums}
            renderComponent={(id, title, image, follows, likes) => (
              <Card
                key={id}
                title={title}
                image={image}
                follows={follows}
                likes={likes}
              />
            )}
          />
        )}
      </div>
    </div>
  );
}

export default Section;
