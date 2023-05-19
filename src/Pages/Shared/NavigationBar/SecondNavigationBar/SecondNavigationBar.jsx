import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SecondNavigationBar = () => {
      return (
            <div className=''>
                  <Navbar bg="primary" variant="dark">
                        <Container>
                              <Navbar.Brand href="#home">TOY CAR LAND</Navbar.Brand>
                              <Nav className="me-auto d-flex gap-5 ">
                                    <Link  style={{color:'white'}} to="/">Home</Link>
                                    <Link  style={{color:'white'}} to="/all-toys">All Toys</Link>
                                    <Link  style={{color:'white'}} to="/my-toys">Blogs</Link>
                              </Nav>
                        </Container>
                  </Navbar>
            </div>
      );
};

export default SecondNavigationBar;