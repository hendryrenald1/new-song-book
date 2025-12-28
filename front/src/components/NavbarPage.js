import React, { useState } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

function NavbarPage() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <MDBNavbar expand="md" dark bgColor="dark">
      <MDBContainer fluid>
        <MDBNavbarBrand className="m1 p0 mx-1">
          <Link to="/">
            <img
              src="../../img/fcm-weblogo.png"
              className="me-2 logo-navbar"
              height="480px"
              alt="FCM logo"
            />
          </Link>
          <span className="logo-text-cap">F</span>aith{" "}
          <span className="logo-text-cap">C</span>hurch{" "}
          <span className="logo-text-cap">M</span>inistries
        </MDBNavbarBrand>
        <MDBNavbarToggler
          type="button"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setOpenNav(!openNav)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar open={openNav}>
          <MDBNavbarNav right fullWidth={false} className="ms-auto">
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="/">
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="/">Song List</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="#!">Contact Us</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default NavbarPage;
