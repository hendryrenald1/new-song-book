import React, { Component, Fragment } from "react";

import AutoCompleteText from "./AutoCompleteText";

import ".././index.css";
import axios from "axios";
import SongList from "./SongList";
import SearchPage from "./SearchPage";
const apiUrl = "/api/songs";

// const apiUrl = "https://fcm-song-book-demo.herokuapp.com/api/songs";

class MainPage extends Component {
  state = {
    songs: [],
    selected: "",
    search: {
      searchInput: "",
      searchLyrics: false,
      searchChordedOnly: false,
      searchRecordedOnly: false,
    },
    clickCount: 0,
    viewLogin: false,
    admin: "",
    edit: false,
  };
  getSongs = () => {
    axios
      .get(apiUrl)
      .then((response) => this.setState({ songs: response.data }))
      .catch((error) => console.log("error fetching songs from db"));
  };
  selectSong = (song) => {
    console.log(song);
    this.props.history.push({
      pathname: "/selectedSong",
      state: { song: song },
    });
  };

  handleSearchChange = (event) => {
    let search = this.state.search;
    if (event.target.name === "searchInput") {
      search.searchInput = event.target.value.toLowerCase();
    } else {
      const parameter = event.target.name;
      search[parameter] = !search[parameter];
    }
    this.setState({ search });
  };
  componentDidMount() {
    const token = window.localStorage.getItem("admin");
    if (token) {
      this.setState({ admin: token });
    }
    this.getSongs();
  }
  render() {
    return (
      <Fragment>
        <header id="home-section" className="img-fluid">
          <div className="dard-overlay">
            <div className="home-inner container">
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <SearchPage handleSearchChange={this.handleSearchChange} />
                  </div>
                </div>

                {/* <MDBContainer size="md" style={{ minHeight: "100vh" }}>
          <JumbotronPage />
          <SearchPage handleSearchChange={this.handleSearchChange} />
          <SongList
            songs={this.state.songs}
            search={this.state.search}
            selected={this.state.selected}
            selectSong={this.selectSong}
          />
        </MDBContainer>
         */}
              </div>
            </div>
          </div>
        </header>

        <section id="song-list" className="container">
          <div className="row">
            <div className="col">
              <ul className="list-group my-4">
                <SongList
                  songs={this.state.songs}
                  search={this.state.search}
                  selected={this.state.selected}
                  selectSong={this.selectSong}
                />
              </ul>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default MainPage;
