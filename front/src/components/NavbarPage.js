import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse

} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

class NavbarPage extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Router>
        <MDBNavbar dark expand="md">
          <MDBNavbarBrand className="m1 p0 mx-1">
          <img src="../../img/fcm-weblogo.png"  href="#" className="logo-navbar" height="64rem" alt=" FCM logo"/>
          <strong> Faith Church Ministries </strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem active>
              <MDBNavLink to="#!">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Song List</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Contact Us</MDBNavLink>
            </MDBNavItem>
            
            </MDBNavbarNav>
            </MDBCollapse>
        </MDBNavbar>
      </Router>
    );
  }
}

export default NavbarPage;
