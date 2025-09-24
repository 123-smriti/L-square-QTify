import axios from "axios";

// Base URL for QTify backend
const BASE_URL = "https://qtify-backend-labs.crio.do/albums/top";

// Create an Axios instance
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Fetch Top Albums
export const fetchTopAlbums = async () => {
  try {
    const response = await api.get("/albums/top");
    return response.data || [];
  } catch (error) {
    console.error("Error fetching Top Albums:", error);
    return [];
  }
};

// Fetch New Albums
export const fetchNewAlbums = async () => {
  try {
    const response = await api.get("/albums/new");
    return response.data || [];
  } catch (error) {
    console.error("Error fetching New Albums:", error);
    return [];
  }
};

// Fetch Songs
export const fetchSongs = async () => {
  try {
    const response = await api.get("/songs");
    return response.data || [];
  } catch (error) {
    console.error("Error fetching Songs:", error);
    return [];
  }
};

// Fetch Genres (for songs filter tabs)
export const fetchFilters = async () => {
  try {
    const response = await api.get("/genres");
    return response.data || [];
  } catch (error) {
    console.error("Error fetching Genres:", error);
    return [];
  }
};
