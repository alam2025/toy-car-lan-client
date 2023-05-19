import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
const Login = () => {
      const [success ,setSuccess]=useState('')
      const [error,setError]=useState('')

      const handleSubmit=event=>{

      }
      return (
            <div className=' sm-w-90 md-w-70 lg-w-60 mx-auto border p-5 mt-3 mb-5 rounded'>
                  <h3>Please Login</h3>
                  {success && <p className=' text-success'>{success}</p>}
                  {error && <p className=' text-danger'>{error}</p>}
                  <Form className=' d-flex flex-column gap-4' onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicUsername">
                              <Form.Label>Email Address</Form.Label>
                              <Form.Control
                                    type="email"
                                    placeholder="Enter your Email"
                                    name='email'
                                    required

                              />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                              <Form.Label>Password</Form.Label>
                              <Form.Control
                                    type="password"
                                    placeholder="Enter password"
                                    name='password'
                                    required

                              />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                              Login
                        </Button>





                  </Form>
                  <div className=' d-flex flex-column justify-content-center align-items-center gap-2'>
                        <Button  className='d-flex justify-content-center align-items-center gap-2 bg-white' variant="light">
                              <FcGoogle size={25} />
                              <span>Sign In With Google</span>

                        </Button>
                        <Button  className='d-flex justify-content-center align-items-center gap-2' variant="secondary">
                              <FaGithub size={25} />
                              <span>Sign In With GitHub</span>

                        </Button>
                        <p>Don't Have an Account? Please <Link className='text-danger text-decoration-underline' to='/register'>Register</Link></p>
                  </div>
            </div>
      );
};

export default Login;