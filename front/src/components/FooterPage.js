import React from "react";
import { MDBContainer, MDBFooter } from "mdb-react-ui-kit";

const FooterPage = () => {
  return (
    <MDBFooter className="font-small panel-footer sticky-footer">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.faithchurchministries.co.uk/"> Faith Church Ministries </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
