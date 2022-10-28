import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Row, Col, Image } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';
import logo  from '../../assets/images/logo.png';
import { useState } from 'react';
import { FaToggleOff, FaToggleOn } from "react-icons/fa";

const Header = () => {
    const {user, logOut} = useContext(AuthContext)
    const [toggle, setToggle] = useState(true);

    const handleToggle = () =>{
        setToggle(!toggle);
 }

    const handleLogOut =()=>{
        logOut()
        .then( ()=>{})
        .catch(error => console.log(error))
    }
    return (
        <div>
    <Navbar collapseOnSelect className='mb-4 rounded' expand="lg" bg="primary" variant="dark">
        <Container className='d-flex'>
            <Navbar.Brand ><Nav.Link className="fw-semibold"><span><Image style={{width:'60px',marginRight:'5px'}} src={logo}/></span>Lifetime knowledge</Nav.Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
            <Link><Button onClick={handleToggle} variant="primary">
                <span>{toggle ? <FaToggleOff/> : <FaToggleOn/> }</span>   
                </Button></Link>
             <Link to='/'><Button variant="primary">Home</Button></Link>
             <Link to='/courses'><Button variant="primary">Courses</Button></Link>
             <Link to='/faq'><Button variant="primary">FAQ</Button></Link>
             <Link to='/blog'><Button variant="primary">Blog</Button></Link>
            
                </Nav>
                <Nav>
                <Nav.Link >
                    {
                          user?.uid ?
                       <>                      
                      <Link><Button onClick={handleLogOut} variant="primary">Log out</Button></Link>
                       </>
                       :
                       <>
                       <Link to='/Login'><Button variant="primary">Login</Button></Link>
                       <Link to='/register'><Button variant="primary">Register</Button></Link>
                        
                       </>
                    }

                    </Nav.Link>
                <Nav.Link >
                    {user?.photoURL ?
                    <Image 
                    data-bs-toggle="tooltip" data-bs-placement="top"
                    title={user.displayName}
                    style={{height:'30px'}} roundedCircle
                    src={user?.photoURL}
                    ></Image>
                    : <FaUser></FaUser>
                    }
                </Nav.Link>

            </Nav>
                    
            </Navbar.Collapse>
        </Container>
    </Navbar>
    
        </div>
    );
};

export default Header;