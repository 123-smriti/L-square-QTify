import React from "react";
import Hero from "../../components/hero/hero";
import Section from "../../components/section/section";
import { useOutletContext } from "react-router-dom";
import styles from "./homepage.module.css";

function Homepage() {
  // data comes from App.js via Outlet context
  const {
    data: { topAlbums, newAlbums, songs, genres },
    errors = {},
    usingFallback = false,
    isLoading = false,
    retryCatalog,
  } = useOutletContext();

  return (
    <main className={styles.homepage}>
      <Hero />
      {usingFallback && (
        <p className={styles.dataNotice} role="status">
          The live catalog is unavailable, so sample music is shown.
          <button
            type="button"
            className={styles.retryButton}
            onClick={retryCatalog}
            disabled={isLoading}
          >
            {isLoading ? "Retrying..." : "Retry"}
          </button>
        </p>
      )}

      {/* Top Albums Section */}
      <Section
        title="Top Albums"
        data={topAlbums}
        type="album"
        error={errors.topAlbums}
      />

      {/* New Albums Section */}
      <Section
        title="New Albums"
        data={newAlbums}
        type="album"
        error={errors.newAlbums}
      />

      {/* Songs Section */}
      <Section
        title="Songs"
        data={songs}
        type="song"
        genres={genres}
        isSongs={true}
        error={errors.songs}
      />
    </main>
  );
}

export default Homepage;

