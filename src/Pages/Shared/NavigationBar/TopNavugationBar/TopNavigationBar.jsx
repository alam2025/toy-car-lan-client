import React, { useContext, useState } from 'react';
import logo from '../../../../assets/logo.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Provider/AuthProvider';
const TopNavigationBar = () => {
      const { user,logOut } = useContext(AuthContext)
      const [isHovering, setIsHovering] = useState(false)
      const handleLogout=()=>{
            logOut()
            .then(()=>{})
            .catch(error=>console.log(error.message))
      }

      return (
            <div className="navbar flex-nowrap bg-base-100  h-28 border-b-2 ">
                  <div className="navbar-start">
                        <div className="dropdown">
                              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                              </label>
                              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><Link to='/'>Home</Link></li>
                                    <li><Link to='/all-toys'>All Toys</Link></li>
                                    <li><Link to='/my-toys'>My Toys</Link></li>
                                    <li><Link to='/add-toy'>Add Toys</Link></li>
                                    <li><Link to='/blog'>Blogs</Link></li>
                              </ul>
                        </div>
                        <Link to='/'><img className='w-[70%] ' src={logo} alt="" /></Link>
                  </div>
                  <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                              <li><Link to='/'>Home</Link></li>
                              <li><Link to='/all-toys'>All Toys</Link></li>
                              <li><Link to='/my-toys'>My Toys</Link></li>
                              <li><Link to='/add-toy'>Add Toys</Link></li>
                              <li><Link to='/blog'>Blogs</Link></li>
                        </ul>
                  </div>
                  <div className="navbar-end">
                        {
                              user ? <>
                              <button onClick={handleLogout}  className='btn btn-outline me-4 btn-sm'>Logout</button>
                              <div className=' relative'>
                                    {
                                          user?.photoURL ? <img
                                                className='w-[60px] h-[60px] rounded-full bg-slate-200 p-2 stroke-slate-50'
                                                src={user.photoURL}
                                                onMouseEnter={() => setIsHovering(true)}
                                                onMouseLeave={() => setIsHovering(false)}
                                          ></img> : ''
                                    }
                                    <h6
                                          className={` absolute bg-black text-white py-2 px-4 rounded-md ${isHovering ? 'block' : 'hidden'}`}>{user?.displayName}</h6>
                              </div>
                              </>
                                    : <Link to='/login'>Login</Link>
                        }
                  </div>
            </div>
      );
};

export default TopNavigationBar;