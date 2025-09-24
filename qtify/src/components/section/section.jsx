/*import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import Card from "../card/Card";
import Carousel from "../carousel/Carousel";
import Filters from "../filters/Filters";
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

import React, { useEffect, useState } from "react";
import { CircularProgress, Tabs, Tab } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import Filters from "../Filters/Filters";
import Card from "../Card/Card";
import styles from "./Section.module.css";

function Section({ title, data, type, filterSource, isSongs = false }) {
  const [filters, setFilters] = useState([{ key: "all", label: "All" }]);
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);
  const [carouselToggle, setCarouselToggle] = useState(true);

  // For songs tab selection
  const [selectedGenre, setSelectedGenre] = useState("all");

  const handleToggle = () => {
    setCarouselToggle((prev) => !prev);
  };

  useEffect(() => {
    if (filterSource) {
      filterSource().then((response) => {
        const { data } = response;
        setFilters([{ key: "all", label: "All" }, ...data]);
      });
    }
  }, []);

  // filter data for songs or albums
  const filteredData = data.filter((item) => {
    if (isSongs) {
      return selectedGenre === "all" || item.genre.key === selectedGenre;
    } else {
      return filters.length > 1 && selectedFilterIndex !== 0
        ? item.genre?.key === filters[selectedFilterIndex].key
        : item;
    }
  });

  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.header}>
        <h3>{title}</h3>

        {!isSongs && (
          <h4 className={styles.toggleText} onClick={handleToggle}>
            {carouselToggle ? "Show All" : "Collapse"}
          </h4>
        )}
      </div>

      {/* Songs Tabs */}
      {isSongs ? (
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
      ) : (
        filters.length > 1 && (
          <div className={styles.filterWrapper}>
            <Filters
              filters={filters}
              selectedFilterIndex={selectedFilterIndex}
              setSelectedFilterIndex={setSelectedFilterIndex}
            />
          </div>
        )
      )}

      {data.length === 0 ? (
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
    </div>
  );
}

export default Section;

