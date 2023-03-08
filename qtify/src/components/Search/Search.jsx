import React from "react";
import styles from "./Search.module.css";
const searchIcon = require("../../assets/Search icon.png");
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
          <img
            src={searchIcon}
            className={styles.searchIcon}
            alt="searchIcon"
          />
        </button>
      </div>
    </div>
  );
}

export default Search;
