import React, { useState, useEffect } from "react";
import Section from "../Section/Section";
import { fetchSongs } from "../Api/Api";
function Songs() {
  const [songs, setSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);
  const handleFilter = (value) => {
    if (value === "all") {
      console.log("all detected", songs);
      setFilteredSongs(songs);
    } else {
      const filteredArray = songs.filter((song) => {
        return song.genre.key === value;
      });

      setFilteredSongs(filteredArray);
    }
  };
  useEffect(() => {
    const handleFetch = async () => {
      const response = await fetchSongs();
      setSongs(response);
      setFilteredSongs(response);
    };
    handleFetch();
  }, []);
  return (
    <div>
      {songs ? (
        <Section
          type="Songs"
          albums={filteredSongs}
          genreTab
          handleFilter={handleFilter}
        />
      ) : null}
    </div>
  );
}

export default Songs;
