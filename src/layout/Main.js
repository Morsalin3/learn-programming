import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {Outlet} from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';
import Header from '../Pages/Header/Header';

const Main = () => {
    return (
        // <div className='Container border border-1'>
        //     <h4>this is main</h4>
            <Container className='border border-1'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            </Container>
        // </div>
    );
};

export default Main;