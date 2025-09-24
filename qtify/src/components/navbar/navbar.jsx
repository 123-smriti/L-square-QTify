import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";

function Navbar({ searchData }) {
  return (
    <nav className={styles.navbar}>
      {/* Logo on left, clickable to home */}
      <Link to="/" className={styles.logoLink}>
        <Logo />
      </Link>

      {/* Search bar in the middle */}
      <Search
        placeholder="Search a song of your choice"
        searchData={searchData}
      />

      {/* Feedback button on the right */}
      <Button text="Give Feedback" />
    </nav>
  );
}

export default Navbar;
