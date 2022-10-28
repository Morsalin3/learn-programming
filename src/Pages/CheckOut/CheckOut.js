import React from 'react';
import { useContext } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';
import {useLoaderData} from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const CheckOut = () => {
    const checkout = useLoaderData();
    const {user} = useContext(AuthContext);
    const {title} = checkout;
    console.log(checkout, user);
    return (
        <div>
            <h2>Welcome to Checkout Page</h2>
            <Card className='w-50 mb-3 m-auto'>
                <Card.Body>
                <Card.Title className='fs-6' >{title}</Card.Title>
                <Card.Text>
                    
                </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between">
                <div>
                    <p><span>Lession: </span></p>
                </div>
                <div>
                    <FaStar className='text-warning me-2'></FaStar>
                    
                </div>
           
                   
            </Card.Footer>
                
             </Card>
        </div>
    );
};

export default CheckOut;
