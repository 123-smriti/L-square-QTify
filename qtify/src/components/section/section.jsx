/*import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import Card from "../card/card";
import Carousel from "../carousel/carousel";
import Filters from "../filters/filters";
import styles from "../section.module.css";

export default function Section({ title, data, filterSource, type }) {
  const [filters, setFilters] = useState([{ key: "all", label: "All" }]);
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);
  const [carouselToggle, setCarouselToggle] = useState(true);

  const handleToggle = () => {
    setCarouselToggle((prevState) => !prevState);
  };

  useEffect(() => {
    if (filterSource) {
      filterSource().then((response) => {
        const { data } = response;
        setFilters((prev) => [...prev, ...data]);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showFilters = filters.length > 1;
  const cardsToRender = data.filter((card) =>
    showFilters && selectedFilterIndex !== 0
      ? card.genre.key === filters[selectedFilterIndex].key
      : card
  );

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {!carouselToggle ? "Collapse All" : "Show All"}
        </h4>
      </div>

      {showFilters && (
        <div className={styles.filterWrapper}>
          <Filters
            filters={filters}
            selectedFilterIndex={selectedFilterIndex}
            setSelectedFilterIndex={setSelectedFilterIndex}
          />
        </div>
      )}

      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardsWrapper}>
          {!carouselToggle ? (
            <div className={styles.wrapper}>
              {cardsToRender.map((ele) => (
                <Card key={ele.id} data={ele} type={type} />
              ))}
            </div>
          ) : (
            <Carousel
              data={cardsToRender}
              renderComponent={(data) => <Card key={data.id} data={data} type={type} />}
            />
          )}
        </div>
      )}
    </div>
  );
}*/

import React, { useState } from "react";
import { CircularProgress, Tabs, Tab } from "@mui/material";
import Carousel from "../carousel/carousel";
import Card from "../card/card";
import styles from "./section.module.css";

function Section({ title, data = [], type, genres = [], isSongs = false, error }) {
  const [carouselToggle, setCarouselToggle] = useState(true);
  const [selectedGenre, setSelectedGenre] = useState("all");
  const filters = [{ key: "all", label: "All" }, ...genres];
  const filteredData =
    isSongs && selectedGenre !== "all"
      ? data.filter((item) => item.genre?.key === selectedGenre)
      : data;

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h3>{title}</h3>

        {!isSongs && (
          <button
            type="button"
            className={styles.toggleText}
            onClick={() => setCarouselToggle((previous) => !previous)}
          >
            {carouselToggle ? "Show All" : "Collapse"}
          </button>
        )}
      </div>

      {isSongs && (
        <Tabs
          value={selectedGenre}
          onChange={(e, newValue) => setSelectedGenre(newValue)}
          className={styles.tabs}
        >
          {filters.map((filter) => (
            <Tab
              key={filter.key}
              label={filter.label}
              value={filter.key}
              className={styles.tabItem}
            />
          ))}
        </Tabs>
      )}

      {filteredData.length === 0 && error ? (
        <p role="status">{error}</p>
      ) : filteredData.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardsWrapper}>
          {isSongs ? (
            <Carousel data={filteredData} type="song" />
          ) : carouselToggle ? (
            <Carousel data={filteredData} type={type} />
          ) : (
            <div className={styles.wrapper}>
              {filteredData.map((ele) => (
                <Card key={ele.id} data={ele} type={type} />
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}

export default Section;

