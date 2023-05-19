import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/logo.png'
import { AuthContext } from '../../../../Provider/AuthProvider';

const TopNavigationBar = () => {
      const [isHovering, setIsHovering] = useState(false);
      const { user, logOut } = useContext(AuthContext);
      

      const handleSignOut = () => {
            logOut()

      }

      return (
            <div className=' container my-4'>
                  <Navbar expand="lg">
                        <Container fluid >
                              <Navbar.Brand><Link><img src={logo} style={{ width: '50%' }} alt="" /></Link></Navbar.Brand>
                              <Navbar.Toggle aria-controls="navbarScroll" />
                              <Navbar.Collapse id="navbarScroll">
                                    <Nav
                                          className="me-auto my-2 my-lg-0"
                                          style={{ maxHeight: '100px' }}
                                          navbarScroll
                                    >
                                          <Form className="d-flex">
                                                <Form.Control
                                                      type="search"
                                                      placeholder="Search"
                                                      className="me-2"
                                                      aria-label="Search"
                                                />
                                                <Button variant="info" >Search</Button>
                                          </Form>
                                    </Nav>

                                    <div className=' d-flex gap-3 justify-content-center align-items-center'>
                                          <Link>WishList</Link>
                                          <Link>Cart</Link>
                                          {
                                                user ? <>
                                                      <Button onClick={handleSignOut}>LogOut</Button>
                                                      <div>
                                                            <img
                                                                  style={{ width: '60px' }}
                                                                  src={user?.photoURL}
                                                                  alt='photo'
                                                                  onMouseEnter={() => setIsHovering(true)}
                                                                  onMouseLeave={() => setIsHovering(false)}
                                                            ></img>

                                                            <h6 style={{ width: '120px', marginLeft: '-30px', fontSize: '8px', top: '70px', fontWeight: '700' }} className={`hover-display-name py-2 rounded px- position-absolute text-white ps-2 fs-6 bg-dark ${isHovering ? 'd-block' : 'd-none'}`}>
                                                                  {user?.displayName}
                                                            </h6>
                                                      </div>
                                                </>
                                                      : <Link to='/login'>Login</Link>
                                          }
                                    </div>
                              </Navbar.Collapse>
                        </Container>
                  </Navbar>


            </div>
      );
};

export default TopNavigationBar;