import React from 'react';
import './Details.css'
import {useLoaderData} from 'react-router-dom'

const Details = () => {
    const details = useLoaderData()
    return (
        <div>
            <h3>this is details :{details.length}</h3>
            
        </div>
    );
};

export default Details;