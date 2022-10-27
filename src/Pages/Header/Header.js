import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Header = () => {
    return (
        <div>
        <Navbar collapseOnSelect className='mb-4 rounded' expand="lg" bg="primary" variant="dark">
            <Container>
            <Navbar.Brand ><Nav.Link>Learn Programming</Nav.Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                {/* <Link className="btn text-xl" to ='/'>Home</Link> */}
             <Link to='/courses'><Button variant="primary">Courses</Button></Link>
             <Link to='/faq'><Button variant="primary">FAQ</Button></Link>
             <Link to='/blog'><Button variant="primary">Blog</Button></Link>
             <Link to='/login'><Button variant="primary">Login</Button></Link>
             <Link to='/register'><Button variant="primary">Register</Button></Link>
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