import React, { useState, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../../Provider/AuthProvider';
const Register = () => {
      const [error,setError]=useState('')
      const { signUp, setProfile, googleSignIn, logOut } = useContext(AuthContext)
      const navigate = useNavigate()
      const location = useLocation()

      const from = location.state?.from?.pathname || '/';



      const handleSubmit = (e) => {
            e.preventDefault();
            const form = e.target;
            setError('')

            const name = form.name.value;
            const email = form.email.value;
            const photoUrl = form.photoUrl.value;
            const password = form.password.value;
            signUp(email, password)
                  .then(result => {

                        setProfile(name, photoUrl)
                              .then(() => {
                                    logOut()
                                          .then(() => { })
                                          .catch(error => setError(error.message))

                                    navigate(from, { replace: true })
                              })
                              .catch((error) =>{ setError(error.message) })


                  })
                  .catch(error => setError(error.message))

            console.log(name, photoUrl, password, email);
      };

      const handleGooglesignIn = () => {
            googleSignIn()
                  .then(() => { navigate(from, { replace: true }) })
                  .catch(error => setError(error.message))
      }

      return (
            <div className="flex flex-col items-center border w-full md:w-3/4 lg:w-1/2 rounded bg-gray-200 py-8  justify-center my-10 mx-auto">
                  <h3 className='text-center text-3xl font-bold pt-4'>Please Sign Up</h3>
                  {
                        error&&<p className=' text-danger'>{error}</p>
                  }
                  <form onSubmit={handleSubmit} className="  py-8 ">

                        <div className="mb-4">
                              <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Name
                              </label>
                              <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="name"
                                    type="name"
                                    placeholder="Enter your name"
                                    name='name'
                                    required
                              />
                        </div>
                        <div className="mb-4">
                              <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="photoUrl">
                                    photoUrl
                              </label>
                              <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="photoUrl"
                                    type="text"
                                    placeholder="Enter your photoUrl"
                                    name='photoUrl'
                                    required
                              />
                        </div>
                        <div className="mb-4">
                              <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                              </label>
                              <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    name='email'
                                    required
                              />
                        </div>
                        <div className="mb-4">
                              <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Password
                              </label>
                              <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    name='password'
                                    required
                              />
                        </div>
                        <div className="flex items-center justify-center">
                              <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                                    type="submit"
                              >
                                    Sign Up
                              </button>
                        </div>
                  </form>

                  <div>
                        <div className='text-center'>

                              <button onClick={handleGooglesignIn} className="btn btn-circle btn-outline">
                                    <FcGoogle size={50} />
                              </button>
                        </div>
                        <p>Already Have an Account ? Please <Link className='text-success font-bold' to='/login'>Login</Link></p>
                  </div>
            </div>
      );
};

export default Register;
