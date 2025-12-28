import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardBody,
  MDBCard,
  MDBCardTitle,
} from "mdb-react-ui-kit";

const SongDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { song } = location.state || {};

  if (!song) {
    return (
      <MDBContainer>
        <p>No song selected</p>
        <MDBBtn onClick={() => navigate("/")}>Go Back</MDBBtn>
      </MDBContainer>
    );
  }

  return (
    <MDBContainer>
      <MDBRow className="mt-4">
        <MDBCol className="col-sm-6">
          <MDBCard>
            <MDBCardTitle className="text-center mt-2">
              {song.title.Tamil}
            </MDBCardTitle>
            <MDBCardBody>
              <pre>{song.lyrics.Tamil.text}</pre>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol className="col-sm-6">
          <MDBCard>
            <MDBCardTitle className="text-center mt-2">
              {song.title.English}
            </MDBCardTitle>
            <MDBCardBody>
              <pre>{song.lyrics.English.text}</pre>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol className="col-sm-12 text-center mt-2">
          <MDBBtn
            className="btn-back"
            onClick={() => navigate(-1)}
            rounded
          >
            Back
          </MDBBtn>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default SongDetailsPage;
