/*import React,{useEffect,useState} from "react";
import Navbar from "./components/navbar/navbar";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import {outlet} from "react-router-dom";
import{
  fetchFilters,
  fetchNewAlbums,
  fetchSongs,
  fetchTopAlbums,
}from "./api";
import logo from './logo.svg';
import './App.css';

//{topAlbums:[], newAlbums:[],songs:[],genres:[]}
function App() {
  const [data ,setData] =useState({});

  const generateData =(key,source)=>{
    source().then((data)=>{
      setData((prevState)=>{
        return {...prevState,[key]:data};
      });
    });
  };

  useEffect(()=>{
    generateData("topAlbums",fetchTopAlbums);
    generateData("newAlbums",fetchNewAlbums);
    generateData("songs",fetchSongs);
    generateData("genres",fetchFilters);
  },[]);

  const { topAlbums=[], newAlbums=[], songs=[], genres=[] }= data;

  return(
    <>
    <StyledEngineProvider injectFirst>
      <Navbar searchData={[...topAlbums,...newAlbums]}/>
      <Outlet context={{data:{topAlbums,newAlbums,songs,genres} }}/>
      {/*<Homepage/>*/ //}
    //</StyledEngineProvider>
    //</>
  //)

  /*return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      
      </header>
      
    </div>
  );
}*/

//export default App;

import React, { useEffect, useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { StyledEngineProvider } from "@mui/material";

import {
  fetchFilters,
  fetchNewAlbums,
  fetchSongs,
  fetchTopAlbums,
} from "./api";

import Homepage from "./pages/Homepage/Homepage";
import AlbumPage from "./pages/AlbumPage/AlbumPage"; // Make sure you have AlbumPage component
import "./App.css";

function App() {
  const [data, setData] = useState({});

  const generateData = (key, source) => {
    source().then((res) => {
      setData((prev) => ({ ...prev, [key]: res }));
    });
  };

  useEffect(() => {
    generateData("topAlbums", fetchTopAlbums);
    generateData("newAlbums", fetchNewAlbums);
    generateData("songs", fetchSongs);
    generateData("genres", fetchFilters);
  }, []);

  const { topAlbums = [], newAlbums = [], songs = [], genres = [] } = data;

  return (
    <StyledEngineProvider injectFirst>
      <Navbar searchData={[...topAlbums, ...newAlbums]} />

      <Routes>
        <Route
          path="/"
          element={<Homepage />}
        />
        <Route
          path="/album/:slug"
          element={<AlbumPage albums={[...topAlbums, ...newAlbums]} />}
        />
      </Routes>

      {/* Optional Outlet if you want nested routes */}
      <Outlet context={{ data: { topAlbums, newAlbums, songs, genres } }} />
    </StyledEngineProvider>
  );
}

export default App;


