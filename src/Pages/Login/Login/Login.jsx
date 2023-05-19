import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');

      const handleSubmit = (e) => {
            e.preventDefault();
            // Perform login logic here
      };

      return (
            <div className="flex flex-col items-center border w-full md:w-3/4 lg:w-1/2 rounded bg-gray-200 py-8  justify-center my-10 mx-auto">
                  <h3 className='text-center text-3xl font-bold pt-4'>Please Login</h3>
                  <form className=" px-8 py-8 ">

                        <div className="mb-4">
                              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                              </label>
                              <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
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
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
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
                       <div>
                        
                       </div>
                        <p>Don't Have an Account ? Please <Link className='text-success font-bold' to='/register'>Register</Link></p>
                  </div>
            </div>
      );
};

export default Login;
