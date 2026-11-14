import axios from "axios";

// Base URL for QTify backend
const BASE_URL = "https://qtify-backend-labs.crio.do";

// Create an Axios instance
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const fetchData = async (path) => {
  const response = await api.get(path);
  return response.data ?? [];
};

export const fetchTopAlbums = () => fetchData("/albums/top");
export const fetchNewAlbums = () => fetchData("/albums/new");
export const fetchSongs = () => fetchData("/songs");
export const fetchFilters = () => fetchData("/genres");
