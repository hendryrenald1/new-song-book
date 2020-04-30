import React from "react";
import { MDBCol, MDBBtn, MDBContainer } from "mdbreact";

class SearchPage extends React.Component {
  state = { display: "none" };

  render() {
    return (
      <>
        <MDBContainer>
          <MDBCol md="12">
            
            <input
              className="form-control"
              type="text"
              placeholder="Enter the song to search...."
              aria-label="Search"
              name="searchInput"
              onChange={this.props.handleSearchChange}
            />
          </MDBCol>
          {/* <MDBBtn href="#" gradient="purple" rounded>
        Search
      </MDBBtn> */}
        </MDBContainer>
      </>
    );
  }
}

export default SearchPage;
