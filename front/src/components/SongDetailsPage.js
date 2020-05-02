import React from "react";

import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardBody } from "mdbreact";
const SongDetailsPage = (props) => {
  let lyrics = props.location.state.song.lyrics.replace(
    /(?:\r\n|\r|\n)/g,
    "<br />"
  );
  return (
    <MDBContainer className="mt-3 text-center">
      <MDBRow>
        <MDBCol>
          <div className="mt-7">
            <h5>
              <strong> {props.location.state.song.name} </strong>
            </h5>
          </div>
        </MDBCol>
      </MDBRow>
      {/* <div class="col-lg-8 d-none d-lg-block"></div> */}
      {/* <MDBRow className="d-none d-sm-block d-md-none">
        <MDBCol>
          <h4>
            {" "}
            <strong> Tamil version </strong>
          </h4>
        </MDBCol>
      </MDBRow> */}

      <MDBRow>
        <MDBCol>
          <MDBCardBody>
            <pre>{props.location.state.song.lyrics}</pre>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
      {/* 
        <MDBRow className="d-none d-sm-block d-md-none">
          <MDBCol>
            <h4> English version</h4>
          </MDBCol>
        </MDBRow>

        <MDBCol md="6">
          <MDBCardBody>
            
            <pre>{props.location.state.song.lyrics}</pre>
          </MDBCardBody>
        </MDBCol>
      </MDBRow> */}
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
