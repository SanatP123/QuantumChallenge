import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import styled from "styled-components";
import "./NavScroll";

const Styles = styled.div`
  .navbar {
    background-color: lightblue;
    -webkit-transition: background-color 500ms linear;
    -moz-transition: background-color 500ms linear;
    -ms-transition: background-color 500ms linear;
    transition: background-color 500ms linear;
    @media (max-width: 425px) {
      padding: 0.5rem 2rem 1rem 1rem;
      background-color: grey;
    }
  }

  .navbar.scrolled {
    background-color: rgb(0, 0, 205, 0.5) !important;
    color: black;
    -webkit-transition: background-color 500ms linear;
    -moz-transition: background-color 500ms linear;
    -ms-transition: background-color 500ms linear;
    transition: background-color 500ms linear;
    @media (max-width: 425px) {
      padding: 0.5rem 2rem 1rem 1rem;
      background-color: grey !important;
      transition: none;
    }
  }

  .navbar-brand,
  .navbar-nav .nav-link {
    color: black;

    &:hover {
      color: blue;
    }
  }

  .dropdown:hover > .dropdown-menu {
    display: block;
    border-top-color: red;
  }
`;

const NavBar = () => {
  return (
    <>
      <Styles>
        <Navbar collapseOnSelect fixed="top" expand="lg">
          <Navbar.Brand href="/">
            <img src="https://quantumitinnovation.com/assets/images/logo/logo.png" width="200" height="80" alt="Quantum IT Innovation" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <NavDropdown
                renderMenuOnMount={true}
                title="Who We Are"
                id="collapsible-nav-dropdown"
              >
                <NavDropdown.Item href="/About">
                  Quantum IT innovation at a glance
                </NavDropdown.Item>
                <NavDropdown.Item href="/Management">
                  Management
                </NavDropdown.Item>
                <NavDropdown.Item href="/Board">
                  Board of Directors
                </NavDropdown.Item>
                <NavDropdown.Item href="/Structure">
                  Our Structure
                </NavDropdown.Item>
                <NavDropdown.Item href="/Partners">Partners</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                renderMenuOnMount={true}
                title="What We Do"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="/Services">
                  Services brief
                </NavDropdown.Item>
                <NavDropdown.Item href="/EDMS">
                  Document Management Solution
                </NavDropdown.Item>
                <NavDropdown.Item href="/Software">
                  Software Solution
                </NavDropdown.Item>
                <NavDropdown.Item href="/Cloud">
                  Cloud Services
                </NavDropdown.Item>
                <NavDropdown.Item href="/Infrastructure">
                  IT Infrastructure
                </NavDropdown.Item>
                <NavDropdown.Item href="/Training">
                  Software Development Training
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                renderMenuOnMount={true}
                title="Our Projects"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="/SoftwareProjects">
                  Software Projects
                </NavDropdown.Item>
                <NavDropdown.Item href="/HardwareProjects">
                  Hardware Projects
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Item>
                <Nav.Link href="/Careers">Join Us</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link href="/Contact">Contact</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Styles>
    </>
  );
};

export default NavBar;
