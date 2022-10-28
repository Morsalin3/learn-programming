import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {Outlet} from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';
import Header from '../Pages/Header/Header';

const Main = () => {
    return (
        
            <Container className=''>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            </Container>
        
    );
};

export default Main;