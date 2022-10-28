import React from 'react';
import './Details.css'
import { Card, Button } from 'react-bootstrap';
import { FaStar, FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';
import {useLoaderData} from 'react-router-dom'

const Details = () => {
    const detail = useLoaderData();
    const {title, category_id, id, lesson, rating, total_view, image_url,details} = detail;
    // console.log(detail)
    return (
        <div>
            <h2 className='text-center'>Welcome to Course Details</h2>
            <Card className='w-50 mb-3 m-auto'>
                <Card.Body>
                <Card.Title className='fs-5' >{title}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <Card.Img className='w-100' variant="top" src={image_url} />
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between">
                <div>
                    <p><span>Lession: {lesson}</span></p>
                </div>
                <div>
                    <FaStar className='text-warning me-2'></FaStar>
                    <span>{rating?.number}</span>
                </div>
                <div>
                    <FaEye className='me-2'></FaEye>
                    <span>{total_view}</span>
                </div>
                <div className='premium-btn'>
                <Link to={`/checkout/${category_id}`}><Button className='access-btn mx-2' variant="primary">Get premium access</Button></Link>
                <Link><Button variant="primary">Get Pdf</Button></Link>
                </div>
            </Card.Footer>
                
             </Card>
            
            
        </div>
    );
};

export default Details;