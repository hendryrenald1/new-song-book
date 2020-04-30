import React from "react";

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardImage,
  MDBCardText,
  MDBCardBody,
  MDBCardTitle,
} from "mdbreact";
import { Router } from "react-router-dom";
const SongDetailsPage = (props) => {
  let lyrics = props.location.state.song.lyrics.replace(
    /(?:\r\n|\r|\n)/g,
    "<br />"
  );
  return (
    <MDBContainer className="mt-4 text-center">
      <MDBRow>
        <MDBCol>
          <MDBCardBody>
            <MDBCardTitle className="h3">
              {props.location.state.song.name + "\n\n"}
            </MDBCardTitle>
            <pre>{props.location.state.song.lyrics}</pre>
          </MDBCardBody>

          <MDBBtn onClick={props.history.goBack} gradient="purple" rounded>
            Back
          </MDBBtn>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default SongDetailsPage;
