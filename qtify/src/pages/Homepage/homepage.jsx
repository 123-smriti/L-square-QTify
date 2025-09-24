import React from "react";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import { useOutletContext } from "react-router-dom";

function Homepage() {
  // data comes from App.js via Outlet context
  const {
    data: { topAlbums, newAlbums, songs, genres },
  } = useOutletContext();

  return (
    <div>
      <Hero />

      {/* Top Albums Section */}
      <Section
        title="Top Albums"
        data={topAlbums}
        type="album"
      />

      {/* New Albums Section */}
      <Section
        title="New Albums"
        data={newAlbums}
        type="album"
      />

      {/* Songs Section */}
      <Section
        title="Songs"
        data={songs}
        type="song"
        filterSource={async () => ({ data: genres })}
        isSongs={true}
      />
    </div>
  );
}

export default Homepage;

