import React from "react";

import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardBody } from "mdbreact";
const SongDetailsPage = (props) => {
  let lyrics = props.location.state.song.lyrics.replace(
    /(?:\r\n|\r|\n)/g,
    "<br />"
  );
  return (
    <MDBContainer className="mt-4 text-center">
      <MDBRow>
        <MDBCol>
          <h3>
            {" "}
            <strong> {props.location.state.song.name + "\n\n"} </strong>
          </h3>
        </MDBCol>
      </MDBRow>
      {/* <div class="col-lg-8 d-none d-lg-block"></div> */}
      <MDBRow className="d-none d-sm-block d-md-none">
        <MDBCol>
          <h4>
            {" "}
            <strong> Tamil version </strong>
          </h4>
        </MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol md="6">
          <MDBCardBody>
            {/* <MDBCardTitle className="h3">
              {props.location.state.song.name + "\n\n"}
            </MDBCardTitle> */}
            <pre>{props.location.state.song.lyrics}</pre>
          </MDBCardBody>
        </MDBCol>

        <MDBRow className="d-none d-sm-block d-md-none">
          <MDBCol>
            <h4> English version</h4>
          </MDBCol>
        </MDBRow>

        <MDBCol md="6">
          <MDBCardBody>
            {/* <MDBCardTitle className="h3">
              {props.location.state.song.name + "\n\n"}
            </MDBCardTitle> */}
            <pre>{props.location.state.song.lyrics}</pre>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol>
          <MDBBtn onClick={props.history.goBack} gradient="purple" rounded>
            Back
          </MDBBtn>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default SongDetailsPage;
