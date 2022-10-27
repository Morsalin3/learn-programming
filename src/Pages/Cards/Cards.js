import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Cards = ({course}) => {
   const  {category_id, id, title, image_url, details,rating, total_view} = course;
    return (
        <div className='g-2'>
        
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                <Card.Title className='fs-6' >{title}</Card.Title>
                <Card.Text>
                    {
                    details.length > 50 ?
                    <>{details.slice(0, 70) + '...'}</>
                    :
                    <>{details}</>
                    }
                </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between">
                <div>
                    <FaStar className='text-warning me-2'></FaStar>
                    <span>{rating?.number}</span>
                </div>
                <div>
                    <FaEye className='me-2'></FaEye>
                    <span>{total_view}</span>
                </div>
                <Link to={`/category/${category_id}`}><Button variant="primary">Details</Button></Link>
            </Card.Footer>
                
             </Card>
        </div>
    );
};

export default Cards;