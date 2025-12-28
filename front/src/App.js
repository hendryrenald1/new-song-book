import React from "react";
import { Routes, Route } from "react-router-dom";

import MainPage from "./components/MainPage";
import SongDetailsPage from "./components/SongDetailsPage";
import NavbarPage from "./components/NavbarPage";
import FooterPage from "./components/FooterPage";

function App() {
  return (
    <>
      <NavbarPage />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/selectedSong" element={<SongDetailsPage />} />
      </Routes>
      <FooterPage />
    </>
  );
}

export default App;
