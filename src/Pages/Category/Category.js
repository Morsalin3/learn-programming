import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({props}) => {
    const {name} = props.Category;
    return (
        <div>
            <p>{name}</p>
        </div>
    );
};

export default Category;