import React, { Component } from "react";

import MainPage from "./components/MainPage";
import { Route } from "react-router-dom";
import SongDetailsPage from "./components/SongDetailsPage";
import NavbarPage from "./components/NavbarPage";
import FooterPage from "./components/FooterPage";

class App extends Component {
  render() {
    return (
      <>
        <NavbarPage />
        <Route exact path="/" component={MainPage} />
        <Route exact path="/selectedSong" component={SongDetailsPage} />
        <FooterPage />
      </>
    );
  }
}

export default App;
