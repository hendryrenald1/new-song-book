import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ".././index.css";
import axios from "axios";
import SongList from "./SongList";
import SearchPage from "./SearchPage";
import ScrollToTop from "./ScrollToTop";

const apiUrl = "/api/songs";

function MainPage() {
  const navigate = useNavigate();
  const [songs, setSongs] = useState([]);
  const [selected, setSelected] = useState("");
  const [search, setSearch] = useState({
    searchInput: "",
    searchLyrics: false,
    searchChordedOnly: false,
    searchRecordedOnly: false,
  });

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => setSongs(response.data))
      .catch((error) => console.log("error fetching songs from db"));
  }, []);

  const selectSong = (song) => {
    navigate("/selectedSong", { state: { song: song } });
  };

  const handleSearchChange = (event) => {
    if (event.target.name === "searchInput") {
      setSearch({ ...search, searchInput: event.target.value.toLowerCase() });
    } else {
      const parameter = event.target.name;
      setSearch({ ...search, [parameter]: !search[parameter] });
    }
  };

  return (
    <>
      <header id="home-section" className="img-fluid">
        <div className="card-overlay">
          <div className="home-inner container">
            <div className="row">
              <div className="col">
                <div className="form-group">
                  <SearchPage handleSearchChange={handleSearchChange} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="song-list" className="container">
        <div className="row">
          <div className="col">
            <ul className="list-group my-4">
              <ScrollToTop>
                <SongList
                  songs={songs}
                  search={search}
                  selected={selected}
                  selectSong={selectSong}
                />
              </ScrollToTop>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainPage;
