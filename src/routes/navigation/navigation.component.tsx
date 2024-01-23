import { Outlet } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

import logo from "../../assets/logo.svg";

import "./navigation.style.scss";
import { CustomButton } from "../../components/button/custom-button.component";

const Navigation = () => (
  <>
    <Navbar expand="lg" className="shadow-sm nav-color">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img
              src={logo}
              width="220"
              className="d-inline-block align-top"
              alt="logo"
            />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/blog">
              <Nav.Link>Blog</Nav.Link>
            </LinkContainer>
            <CustomButton
              text="Log In"
              textColor="black"
              backgroundColor="white"
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet />
  </>
);

export default Navigation;
