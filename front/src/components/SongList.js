import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBIcon,
} from "mdbreact";

class SongList extends React.Component {
  render() {
    return this.props.songs
      .filter((song) => {
        if (this.props.search.searchChordedOnly && song.chorded === false)
          return false;
        if (this.props.search.searchRecordedOnly && song.recording === "")
          return false;

        let searchTarget = song.title.English;
        if (this.props.search.searchLyrics) searchTarget += song.lyrics;
        searchTarget += song.title.Tamil;
        searchTarget = searchTarget.toLowerCase();
        return searchTarget.includes(this.props.search.searchInput);
      })
      .sort((a, b) => (a.title.Tamil > b.title.Tamil ? 1 : -1))
      .map((song) => {
        const classes =
          "songlink" + (this.props.selected === song ? " selectedsong" : "");
        return (
          // <li
          //   className="list-group-item text-md-center text-left song-list"
          //   key={song._id}
          //   onClick={() => this.props.selectSong(song)}
          // >
          //   {song.title.English}
          //   {song.title.Tamil}
          // </li>

          <MDBCard
            key={song._id}
            className="my-1"
            onClick={() => this.props.selectSong(song)}
          >
            <MDBCardBody key={song._id}>
              <MDBCardTitle>{song.title.Tamil}</MDBCardTitle>
              <MDBCardText key={song._id}>
                <h5 className="font-weight-bold blue-text">
                  {song.title.English}
                </h5>
                <i key={song._id} className="mx-1 fas fa-microphone">
                  {song.artist}
                </i>
                <i className="fas fa-record-vinyl"> </i> {song.album}
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        );
      });
  }
}

export default SongList;
