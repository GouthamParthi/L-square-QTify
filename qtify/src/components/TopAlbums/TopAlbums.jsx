import React, { useState, useEffect } from "react";
import Section from "../Section/Section";
import { fetchTopAlbums } from "../Api/Api";
function TopAlbums() {
  const [topAlbums, setTopAlbums] = useState();
  useEffect(() => {
    const handleFetch = async () => {
      const response = await fetchTopAlbums();
      setTopAlbums(response);
    };
    handleFetch();
  }, []);
  return (
    <div>
      {topAlbums ? <Section type="Top Albums" albums={topAlbums} /> : null}
    </div>
  );
}

export default TopAlbums;
