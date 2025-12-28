import React from "react";
import { MDBCol, MDBContainer } from "mdb-react-ui-kit";

function SearchPage({ handleSearchChange }) {
  return (
    <MDBContainer>
      <MDBCol md="12">
        <div className="d-block p-2 search-text-background">
          <input
            type="text"
            className="form-control form-control-lg"
            name="searchInput"
            placeholder="Search Songs...."
            onChange={handleSearchChange}
          />
        </div>
      </MDBCol>
    </MDBContainer>
  );
}

export default SearchPage;
