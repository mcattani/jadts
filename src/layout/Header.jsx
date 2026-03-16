import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaDev } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function NavScroll() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <FaDev style={{ fontSize: '1.5rem', marginRight: '0.5rem' }} />
        <Navbar.Brand as={Link} to="/">JADTS</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown title="Generadores" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/loremipsum">Lorem Ipsum</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/uuidgenerator">UUID</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/passgenerator">Password </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

