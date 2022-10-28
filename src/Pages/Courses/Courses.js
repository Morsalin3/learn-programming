import React from 'react';
import './Courses.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Cards from '../Cards/Cards';



const Courses = () => {
    const courses = useLoaderData();
    const [categories, setCategories] = useState([]);
    
    // const [courses, setCourses] = useState([])
    
    useEffect( () =>{
        fetch('https://learn-programming-server.vercel.app/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    
    },[]);

    return (
        <div>
            <Row>
            <Col lg="4">
            <div className='leftSide ms-4 d-flex flex-column pt-4 shadow align-items-center'>
                {
                    categories.map(category => <Link className='mb-4 w-75'>
                    <Button className='py-2 w-100' key={category.id}>{category.name}
                    </Button></Link>)
                }
            </div>
            </Col>
            <Col lg="8">
            <div className='courses-container mb-3 shadow'>
                {
                    courses.map(course => <Cards
                    key={course.id}
                    course ={course}
                    ></Cards>)
                }
          
            </div>
            </Col>
            </Row>
        </div>
    );
};

export default Courses;