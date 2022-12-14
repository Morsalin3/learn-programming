import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook} from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const {createUser} = useContext(AuthContext);

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name , photoURL, email, password);

        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            setError('');
            form.reset();
        })
        .catch(error => {
            console.error(error)
            setError(error.message);
        });
       
    }
    return (
        <div className='w-50 m-auto border border-1 p-5 mb-3 rounded'>
            <h2 className='text-center'>Register</h2>
        <Form onSubmit={handleSubmit} className='mb-3'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control neme="name" type="text" placeholder="Your name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control name="photoURL" type="text" placeholder="Your photo url" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Your email" required />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Your Password" required/>
        </Form.Group>
       
       <ButtonGroup>
       <Button variant="outline-primary" type="submit">
          Register
        </Button>
       </ButtonGroup>
       <Form.Text className='text-danger'>
            {error}
       </Form.Text>
      </Form>
      <p>Already have an Account <Link to='/login'>Login</Link></p>
        </div>
    );
};

export default Register;