import React from "react";
import { useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import Card from "../../components/Card/Card";
import styles from "./Albumpage.module.css";

function Albumpage() {
  const { albumId } = useParams();

  // get albums from Outlet context (App.js)
  const {
    data: { topAlbums, newAlbums },
  } = useOutletContext();

  const allAlbums = [...topAlbums, ...newAlbums];
  const album = allAlbums.find((a) => a.id === albumId || a.slug === albumId);

  if (!album) {
    return <p className={styles.notFound}>Album not found</p>;
  }

  return (
    <div className={styles.albumPage}>
      <div className={styles.albumHeader}>
        <img
          src={album.image}
          alt={album.title}
          className={styles.albumImage}
        />
        <div>
          <h2>{album.title}</h2>
          <p>{album.description}</p>
          <p>{album.follows} follows</p>
        </div>
      </div>

      <div className={styles.songsSection}>
        <h3>Songs</h3>
        <div className={styles.songsGrid}>
          {album.songs.map((song) => (
            <Card key={song.id} data={song} type="song" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Albumpage;
