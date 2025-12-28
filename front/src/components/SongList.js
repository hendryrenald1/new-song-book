import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdb-react-ui-kit";

function SongList({ songs, search, selected, selectSong }) {
  return songs
    .filter((song) => {
      if (search.searchChordedOnly && song.chorded === false)
        return false;
      if (search.searchRecordedOnly && song.recording === "")
        return false;

      let searchTarget = song.title.English;
      if (search.searchLyrics) searchTarget += song.lyrics;
      searchTarget += song.title.Tamil;
      searchTarget = searchTarget.toLowerCase();
      return searchTarget.includes(search.searchInput);
    })
    .sort((a, b) => (a.title.Tamil > b.title.Tamil ? 1 : -1))
    .map((song) => {
      return (
        <MDBCard
          key={song._id}
          className="my-1 songSelect"
          onClick={() => selectSong(song)}
        >
          <MDBCardBody>
            <MDBCardTitle className="title-color">
              {song.title.Tamil}
            </MDBCardTitle>

            <MDBCardTitle className="h5 blue-text">
              {song.title.English}
            </MDBCardTitle>

            <MDBCardText>
              <i className="me-1 fas fa-microphone"></i>
              {song.artist}
              <i className="ms-2 fas fa-record-vinyl"> </i> {song.album}
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      );
    });
}

export default SongList;
