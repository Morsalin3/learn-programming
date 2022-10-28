import React from 'react';
import './Footer.css'
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { FaFacebook, FaTwitter, FaTwitch ,FaWhatsapp} from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';


const Footer = () => {
    return (
    
    <div className="footer-container bg-primary rounded">

       <div>
          <Link to='/courses'><Button variant="primary">Courses</Button></Link>
                <Link to='/faq'><Button variant="primary">FAQ</Button></Link>
                <Link to='/blog'><Button variant="primary">Blog</Button></Link>
                <Link to='/login'><Button variant="primary">Login</Button></Link>
                <Link to='/register'><Button variant="primary">Register</Button></Link>
                    
       </div>
        <div>
            <Link ><Button variant="primary"><FaFacebook/></Button></Link>
            <Link ><Button variant="primary"><FaTwitter/></Button></Link>
            <Link ><Button variant="primary"><FaWhatsapp/></Button></Link>
            <Link ><Button variant="primary"><FaTwitch/></Button></Link>
        
        </div>
         
        
    </div>
       
    );
};

export default Footer;