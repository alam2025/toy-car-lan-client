import React from 'react';
import logo from '../../../assets/logo.png'
import { FaFacebook, FaInstagram, FaTwitch, FaTwitter } from 'react-icons/fa';

const Footer = () => {
      return (
            <div>
                  <footer className="footer p-10 bg-base-200 text-base-content mt-auto">
                        <div>
                              <img src={logo} className=' w-[200px]' alt="" />
                              <p>TOY CAR LAND<br />Providing modern toy since 1992</p>
                        </div>
                        <div>
                              <span className="footer-title">Services</span>
                              <a className="link link-hover">Branding</a>
                              <a className="link link-hover">Design</a>
                              <a className="link link-hover">Marketing</a>
                              <a className="link link-hover">Advertisement</a>
                        </div>
                        <div>
                              <span className="footer-title">Contact</span>
                              <p>Email : toyland@gamil.com</p>
                              <p>Phone : 019XXXXXXX</p>
                              <p>Address : House 12, 05 Road Mymensign</p>
                        </div>
                        <div>
                              <span className="footer-title">Legal</span>
                              <a className="link link-hover">Terms of use</a>
                              <a className="link link-hover">Privacy policy</a>
                              <a className="link link-hover">Cookie policy</a>
                        </div>
                  </footer>
                  <div className='flex   justify-center my-4 gap-4'>
                  <a href="#"><FaFacebook size={40}/></a>
                  <a href="#"><FaInstagram size={40}/></a>
                  <a href="#"><FaTwitter size={40}/></a>
                  </div>

                  <center>&copy;  Allright reserved by Toy Car Land</center>
            </div>
      );
};

export default Footer;