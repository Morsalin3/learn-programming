import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h3>this is header</h3>
            <Navbar collapseOnSelect className='mb-4' expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand ><Nav.Link to='/'>Learn Programming</Nav.Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link to='/courses'>Courses</Nav.Link>
            {/* <Link className="btn text-xl" to ='/'>Home</Link> */}
            <Nav.Link to='/blog'>FAQ</Nav.Link>
            <Nav.Link to='/blog'>Blog</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets">user</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
          {/* <div className='d-lg-none'>
            <LeftSideNav></LeftSideNav>
          </div> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;