import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./Search.module.css";
function Search() {
  return (
    <div>
      <div className={styles.container}>
        <input
          type="text"
          className={styles.search}
          placeholder="Search a song of your choice"
        />
        <button className={styles.searchButton}>
          <SearchIcon />
        </button>
      </div>
    </div>
  );
}

export default Search;
