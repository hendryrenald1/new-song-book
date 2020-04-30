import React from "react";
import {
  MDBJumbotron,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
} from "mdbreact";
import SearchPage from "./SearchPage";

const JumbotronPage = () => {
  return (
    <MDBContainer className="mt-4 text-center">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron className="p-0">
            <MDBCardImage
              className="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(134).jpg"
              style={{
                height: "300px",
                width: "100%",
              }}
            />
            <MDBCardBody>
              <MDBCardTitle className="h3">Search Song</MDBCardTitle>
            </MDBCardBody>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default JumbotronPage;
