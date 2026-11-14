import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import styles from "./filter.module.css";
import Carousel from "../carousel/carousel";
import Card from "../card/card";

function Filter({ songs = [], genres = [] }) {
  // By default, "All" is selected
  const [selectedGenre, setSelectedGenre] = useState("all");

  const handleChange = (event, newValue) => {
    setSelectedGenre(newValue);
  };

  // Filter songs based on selected tab
  const filteredSongs =
    selectedGenre === "all"
      ? songs
      : songs.filter((song) => song.genre.key === selectedGenre);

  return (
    <div className={styles.filterWrapper}>
      <Tabs
        value={selectedGenre}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        textColor="inherit"
        TabIndicatorProps={{ style: { background: "var(--color-primary)" } }}
      >
        {/* Default "All" Tab */}
        <Tab label="All" value="all" className={styles.tab} />

        {/* Render dynamic genres */}
        {genres.map((genre) => (
          <Tab
            key={genre.key}
            label={genre.label}
            value={genre.key}
            className={styles.tab}
          />
        ))}
      </Tabs>

      {/* Carousel of filtered songs */}
      <div className={styles.carouselContainer}>
        <Carousel data={filteredSongs} renderItem={(item) => <Card data={item} type="song" />} />
      </div>
    </div>
  );
}

export default Filter;
