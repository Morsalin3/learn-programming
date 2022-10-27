import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';



const Footer = () => {
    return (
    <div className="footer-container">
        <Navbar collapseOnSelect style={{height:"150px"}} className='rounded' expand="lg"  bg="primary" variant="dark">
                <Container>
                <Navbar.Brand ><Nav.Link></Nav.Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                <Link to='/courses'><Button variant="primary">Courses</Button></Link>
                <Link to='/faq'><Button variant="primary">FAQ</Button></Link>
                <Link to='/blog'><Button variant="primary">Blog</Button></Link>
                <Link to='/login'><Button variant="primary">Login</Button></Link>
                <Link to='/register'><Button variant="primary">Register</Button></Link>
                    
                    </Nav>
                </Navbar.Collapse>
                </Container>
        </Navbar>
    </div>
    );
};

export default Footer;