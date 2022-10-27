import React from 'react';
import './Details.css'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';
import {useLoaderData} from 'react-router-dom'

const Details = () => {
    const detail = useLoaderData();
    const {title, id, price, rating, total_view, image_url,details} = detail;
    console.log(detail)
    return (
        <div>
            <h3>this is details{title}</h3>
            <h3>this is price:{price}</h3>
            <Card.Img variant="top" src={image_url} />
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                <Card.Title className='fs-6' >{title}</Card.Title>
                <Card.Text>
                  
                    {details}
             
                </Card.Text>
                </Card.Body>
             </Card>
            
            
        </div>
    );
};

export default Details;