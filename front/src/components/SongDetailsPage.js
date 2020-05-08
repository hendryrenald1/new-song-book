import React from "react";

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardBody,
  MDBCard,
  MDBCardTitle,
} from "mdbreact";
const SongDetailsPage = (props) => {
  //let title = props.location.state.song.title.English;
  return (
    <MDBContainer>
      <MDBRow className="mt-4">
        <MDBCol className="col-sm-6">
          <MDBCard>
            <MDBCardTitle className="text-center">
              {props.location.state.song.title.Tamil}
            </MDBCardTitle>
            <MDBCardBody>
              <pre>{props.location.state.song.lyrics.Tamil.text}</pre>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol className="col-sm-6">
          <MDBCard>
            <MDBCardTitle className="text-center">
              {props.location.state.song.title.English}
            </MDBCardTitle>
            <MDBCardBody>
              <pre>{props.location.state.song.lyrics.English.text}</pre>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol className="col-sm-12 text-center mt-2">
          <MDBBtn onClick={props.history.goBack} gradient="purple" rounded>
            Back
          </MDBBtn>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default SongDetailsPage;
