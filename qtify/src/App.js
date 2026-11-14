import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import Navbar from "./components/navbar/navbar";
import { fetchFilters, fetchNewAlbums, fetchSongs, fetchTopAlbums } from "./api/api";
import fallbackData from "./api/fallbackData";
import "./App.css";

function App() {
  const [data, setData] = useState({ topAlbums: [], newAlbums: [], songs: [], genres: [] });
  const [errors, setErrors] = useState({});
  const [usingFallback, setUsingFallback] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadAttempt, setLoadAttempt] = useState(0);

  useEffect(() => {
    let active = true;
    setIsLoading(true);
    const load = async () => {
      const sources = {
        topAlbums: fetchTopAlbums,
        newAlbums: fetchNewAlbums,
        songs: fetchSongs,
        genres: fetchFilters,
      };
      const results = await Promise.allSettled(
        Object.values(sources).map((fetchData) => fetchData())
      );
      if (!active) return;

      const nextData = {};
      const nextErrors = {};
      Object.keys(sources).forEach((key, index) => {
        const result = results[index];
        if (result.status === "fulfilled") {
          nextData[key] = result.value;
        } else {
          console.error(`Failed to load ${key}:`, result.reason);
          nextData[key] = fallbackData[key];
          nextErrors[key] =
            "Content could not be loaded. Check your connection and try again.";
        }
      });
      setData(nextData);
      setErrors(nextErrors);
      setUsingFallback(Object.keys(nextErrors).length > 0);
      setIsLoading(false);
    };
    load();
    return () => { active = false; };
  }, [loadAttempt]);

  const { topAlbums, newAlbums, songs, genres } = data;
  const retryCatalog = () => setLoadAttempt((attempt) => attempt + 1);
  return (
    <StyledEngineProvider injectFirst>
      <Navbar searchData={[...topAlbums, ...newAlbums]} />
      <Outlet
        context={{
          data: { topAlbums, newAlbums, songs, genres },
          errors,
          usingFallback,
          isLoading,
          retryCatalog,
        }}
      />
    </StyledEngineProvider>
  );
}

export default App;
