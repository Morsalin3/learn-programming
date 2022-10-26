import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';


const Footer = () => {
    return (
    <div className="footer-container">
        <Navbar collapseOnSelect style={{height:"150px"}} className='mb-4 rounded' expand="lg"  bg="primary" variant="dark">
                <Container>
                <Navbar.Brand ><Nav.Link to='/'>Learn Programming</Nav.Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link to='/courses'>Courses</Nav.Link>
                    {/* <Link className="btn text-xl" to ='/'>Home</Link> */}
                    <Nav.Link to='/faq'>FAQ</Nav.Link>
                    <Nav.Link to='/blog'>Blog</Nav.Link>
                    <Nav.Link to='/login'>Login</Nav.Link>
                    <Nav.Link to='/register'>Register</Nav.Link>
                    
                    </Nav>
                </Navbar.Collapse>
                </Container>
        </Navbar>
    </div>
    );
};

export default Footer;