import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "../../styles/Navbar.module.scss";
import InputGroup from "react-bootstrap/InputGroup";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary ">
      <Container fluid className={styles["container"]}>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Nav
          className={`me-auto my-2 my-lg-0 ${styles["navbar"]}`}
          style={{ maxHeight: "100px" }}
          navbarScroll
          fluid
        >
          <Form className="d-flex">
            <InputGroup className={styles["signUp"]}>
              <i class="bi bi-search "></i>
              <Form.Control className={styles["search"]} />
            </InputGroup>
          </Form>
          <Nav.Link href="#action1" className={styles["nav-link"]}>
            Categories
          </Nav.Link>
          <Nav.Link href="#action2" className={styles["nav-link"]}>
            Website Builder
          </Nav.Link>
          <Nav.Link href="#action2" className={styles["nav-link"]}>
            Today's deals
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
