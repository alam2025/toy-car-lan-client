import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../../Provider/AuthProvider';
const Login = () => {
      const { signInEmail,googleSignIn} = useContext(AuthContext)
      const navigate= useNavigate()

      const location = useLocation();
      
      // console.log(location);
      const from = location.state?.from?.pathname || '/';
      // console.log(from);


      const handleSubmit = (e) => {
            e.preventDefault();
            const form = e.target;

            const email = form.email.value;
            const password = form.password.value;

            signInEmail(email,password)
            .then(result=>{
                  console.log(result.user);
                  navigate(from,{replace:true})

            }).catch(error=>console.log(error.message))
      };

      const handleGoogleLogin=()=>{
            googleSignIn()
            .then(()=>{  navigate(from,{replace:true})})
            .catch(error=>console.log(error.message))

      }

      return (
            <div className="flex flex-col items-center border w-full md:w-3/4 lg:w-1/2 rounded bg-gray-200 py-8  justify-center my-10 mx-auto">
                  <h3 className='text-center text-3xl font-bold pt-4'>Please Login</h3>
                  <form onSubmit={handleSubmit} className=" px-8 py-8 ">

                        <div className="mb-4">
                              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                              </label>
                              <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    name='email'
                              />
                        </div>
                        <div className="mb-4">
                              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Password
                              </label>
                              <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    name='password'
                              />
                        </div>
                        <div className="flex items-center justify-center">
                              <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                                    type="submit"
                              >
                                    Sign In
                              </button>
                        </div>
                  </form>

                  <div>
                        <div className='text-center'>

                              <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline">
                                    <FcGoogle size={50} />
                              </button>
                        </div>
                        <p>Don't Have an Account ? Please <Link className='text-success font-bold' to='/register'>Register</Link></p>
                  </div>
            </div>
      );
};

export default Login;
