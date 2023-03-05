import React from "react";
import GiveFeedbackButton from "../GiveFeedbackButton/GiveFeedbackButton";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Logo />
      <Search />
      <GiveFeedbackButton />
    </div>
  );
}

export default Navbar;
