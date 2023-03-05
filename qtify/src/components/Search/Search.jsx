import React from "react";

import styles from "./Search.module.css";
function Search() {
  return (
    <div>
      <div className={styles.container}>
        <input type="text" className={styles.search} />
        <button className={styles.searchButton}>Search</button>
      </div>
    </div>
  );
}

export default Search;
