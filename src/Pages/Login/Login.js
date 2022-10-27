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

const Login = () => {
    const {providerLogin} = useContext(AuthContext);

   const googleProvider = new GoogleAuthProvider()

   const  handleGoogleSignIn =(event) => {
     event.preventDefault();
      providerLogin(googleProvider)
      .then(result =>{
        const user = result.user;
        console.log(user);
      })
      .catch(error => console.log(error));
    
  }
    return (
        <div className='w-50 m-auto border border-1 p-5 mb-3 rounded'>
            <h2 className='text-center'>Login</h2>
            <Form className='mb-3'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
       
       <ButtonGroup>
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
       
      </Form>
        </div>
    );
};

export default Login;