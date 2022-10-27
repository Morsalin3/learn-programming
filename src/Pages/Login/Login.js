import React from 'react';
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook} from "react-icons/fa";
import './Login.css'
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';


const Login = () => {
    const [error, setError] = useState('');
    const {providerLogin, signIn} = useContext(AuthContext);
    const navigate = useNavigate();

   const googleProvider = new GoogleAuthProvider()

   const handleGoogleSignIn =(event) => {
    event.preventDefault();
      providerLogin(googleProvider)
      .then(result =>{
        const user = result.user;
        console.log(user);
        
      })
      .catch(error => console.log(error)); 
  }

  const handleSubmit =event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
    .then(result =>{
        const user = result.user;
        console.log(user);
        form.reset();
        setError('');
        navigate('/courses')
    })
    .catch(error => {
        console.error(error)
        setError(error.message);
    });
  }

    return (
        <div className='w-50 m-auto border border-1 p-5 mb-3 rounded'>
            <h2 className='text-center'>Login</h2>
        <Form onSubmit={handleSubmit} className='mb-3'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" required/>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" required/>
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
       
       <ButtonGroup >
       <Button variant="outline-primary" type="submit">
          Login
        </Button>
        <Button onClick={handleGoogleSignIn} variant="outline-info" type="submit">
        <FaGoogle></FaGoogle> Login with Google
        </Button>
        <Button variant="outline-dark" type="submit">
        <FaGithub></FaGithub> Login with Github
        </Button>
       </ButtonGroup>
       <Form.Text className='text-danger'>
            {error}
       </Form.Text>
       
      </Form>
        </div>
    );
};

export default Login;