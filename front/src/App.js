import React, { Component, Fragment } from "react";

import MainPage from "./components/MainPage";
import { Route, Link } from "react-router-dom";
import SongDetailsPage from "./components/SongDetailsPage";
import NavbarPage from "./components/NavbarPage";

class App extends Component {
  render() {
    return (
      <>
        <NavbarPage />
        <Route exact path="/" component={MainPage} />
        <Route exact path="/selectedSong" component={SongDetailsPage} />
      </>
    );
  }
}

export default App;
