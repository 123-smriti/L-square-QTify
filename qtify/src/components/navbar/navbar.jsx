import React from "react";
import { Link } from "react-router-dom";
import Button from "../button/button";
import Logo from "../logo/logo";
import Search from "../search/search";
import styles from "./navbar.module.css";

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
      <Button>Give Feedback</Button>
    </nav>
  );
}

export default Navbar;
