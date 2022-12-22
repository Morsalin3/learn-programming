import React from 'react';
import { useContext } from 'react';
import {Card, Button } from 'react-bootstrap';
import {useLoaderData} from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const CheckOut = () => {
    const checkout = useLoaderData();
    const {user} = useContext(AuthContext);
    const {title,  price} = checkout;
    const {displayName, email} = user;
    // console.log(checkout, user);
    return (
        <div>
            <h2 className='text-center'>Welcome to Checkout Page</h2>
            
            <Card className='w-50 mb-3 m-auto'>
                <Card.Body>
                <Card.Title className='fs-4' >{title}</Card.Title>
                </Card.Body>
                <Card.Footer className="">
                <div className="m-3 d-flex justify-content-between">
                    <div className='shadow p-3 rounded'>
                    <h5>Bellings Information</h5>
                    <p>User Name: {displayName}</p>
                    <p>User Email: {email}</p>
                   
                    </div>  

                    <div className='shadow p-4 rounded'>
                    <h5>Your Order</h5>
                    <p>Product: 1</p>
                    <p>Subtotal: {price}$</p>
                    <p>Total: {price}$</p>
          
                    </div>
                    
                </div>            
            </Card.Footer>
           
                
             </Card>
               
        </div>
    );
};

export default CheckOut;
