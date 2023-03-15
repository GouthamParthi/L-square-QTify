import React, { useState, useEffect } from "react";
import Section from "../Section/Section";
import { fetchSongs } from "../Api/Api";
function Songs() {
  const [songs, setSongs] = useState();
  useEffect(() => {
    const handleFetch = async () => {
      const response = await fetchSongs();
      setSongs(response);
    };
    handleFetch();
  }, []);
  return (
    <div>{songs ? <Section type="Songs" albums={songs} genreTab /> : null}</div>
  );
}

export default Songs;
