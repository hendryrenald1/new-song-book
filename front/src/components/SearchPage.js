import React from "react";
import { MDBCol, MDBContainer } from "mdbreact";

class SearchPage extends React.Component {
  state = { display: "none" };

  render() {
    return (
      <>
        <MDBContainer>
          <MDBCol md="12">
            {/* <span className="d-block p-2 bg-dark"> */}
            <div className="d-block p-2 search-text-background">
              <input
                type="text"
                className="form-control form-control-lg "
                name="searchInput"
                placeholder="Search Songs...."
                onChange={this.props.handleSearchChange}
              ></input>
            </div>
            {/* <input
              className="form-control"
              type="text"
              placeholder="Enter the song to search...."
              aria-label="Search"
            
              onChange={this.props.handleSearchChange}
            /> */}
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
