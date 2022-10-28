import React from 'react';
import {Image}  from 'react-bootstrap';
import banner  from '../../assets/images/banner.jpg'

const Home = () => {
    return (
        <div className='mb-5'>
            <h2 className='text-center fw-bold'>welcome to Ouer Lifetime Knowledge</h2>
            <Image
             className="d-block w-75 m-auto rounded "
             src={banner}
             alt="hello"
            ></Image>
       
        </div>
    );
};

export default Home;