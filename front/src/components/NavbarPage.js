import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdbreact";
import { BrowserRouter as Router, Link } from "react-router-dom";

class NavbarPage extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <MDBNavbar dark expand="md">
        <MDBNavbarBrand className="m1 p0 mx-1">
          <Link to="/">
            <img
              src="../../img/fcm-weblogo.png"
              href="#"
              className="mr-2 logo-navbar"
              height="480px"
              alt=" FCM logo"
            />
          </Link>
          {/* <strong> விசுவாச கானங்கள் </strong> */}
          <span className="logo-text-cap">F</span>aith{" "}
          <span className="logo-text-cap">C</span>hurch{" "}
          <span className="logo-text-cap">M</span>inistries
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem active>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/">Song List</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Contact Us</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;
