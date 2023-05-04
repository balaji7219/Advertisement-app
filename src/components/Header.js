import React from "react";
import { Navbar, Container, Button, Form } from "react-bootstrap";
const Header = () => {
  return (
    <Navbar sticky="top" variant="dark" className="bg-white">
      <Container>
        <div className="logo-wrapper d-flex align-items-center ">
          <img
            src="http://192.168.29.2:8000/front_img/icon/humburger.svg"
            alt="humburger"
            className="header-menu"
          />
          <img
            src="http://192.168.29.2:8000/front_img/icon/logo.svg"
            alt="Letmegrab logo"
            className="logo"
          />
        </div>

        <Navbar.Brand className="text-dark" href="#">
          AboutUs
        </Navbar.Brand>
        <Navbar.Brand className="text-dark" href="#">
          Ads Campaign
        </Navbar.Brand>
        <Navbar.Brand className="text-dark" href="#">
          Help &amp; Support
        </Navbar.Brand>

        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-dark">Search</Button>
        </Form>
      </Container>
    </Navbar>
  );
};

export default Header;
