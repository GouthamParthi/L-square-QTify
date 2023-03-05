import React from "react";
import styles from "./Logo.module.css";
const logo = require("../../assets/Logo.png");
function Logo() {
  return (
    <div>
      <img
        className={styles.logo}
        src={logo}
        alt="logo"
        width={67}
        height={34}
      />
    </div>
  );
}

export default Logo;
