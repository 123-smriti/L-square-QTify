import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Section from "../section/section";
import Carousel from "../carousel/carousel";
import { Tab, Tabs } from "@mui/material";
import styles from "./songsSection.module.css";

export default function SongsSection() {
  const {
    data: { songs = [], genres = [] },
  } = useOutletContext();

  const [selectedGenre, setSelectedGenre] = useState("all");
  const [genreTabs, setGenreTabs] = useState([{ key: "all", label: "All" }]);

  useEffect(() => {
    if (genres.length > 0) {
      setGenreTabs([{ key: "all", label: "All" }, ...genres]);
    }
  }, [genres]);

  const handleChange = (event, newValue) => {
    setSelectedGenre(newValue);
  };

  const filteredSongs =
    selectedGenre === "all"
      ? songs
      : songs.filter((song) => song.genre.key === selectedGenre);

  return (
    <div className={styles.songsSection}>
      <h2>Songs</h2>
      <Tabs
        value={selectedGenre}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        className={styles.tabs}
      >
        {genreTabs.map((genre) => (
          <Tab
            key={genre.key}
            value={genre.key}
            label={genre.label}
            className={styles.tab}
          />
        ))}
      </Tabs>

      <div className={styles.carouselWrapper}>
        <Carousel
          data={filteredSongs}
          renderComponent={(data) => <Section data={[data]} type="song" />}
        />
      </div>
    </div>
  );
}
