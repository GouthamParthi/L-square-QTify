import React, { useState, useEffect } from "react";
import Section from "../Section/Section";
import { fetchNewAlbums } from "../Api/Api";
function NewAlbums() {
  const [newAlbums, setNewAlbums] = useState();
  useEffect(() => {
    const handleFetch = async () => {
      const response = await fetchNewAlbums();
      setNewAlbums(response);
    };
    handleFetch();
  }, []);
  return (
    <div>
      {newAlbums ? <Section type="New Albums" albums={newAlbums} /> : null}
    </div>
  );
}

export default NewAlbums;
