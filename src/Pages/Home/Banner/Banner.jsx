import React from 'react';
import bg1 from '../../../assets/images/banner/bg1.jpg'
import bg2 from '../../../assets/images/banner/bg2.jpg'
import { Link } from 'react-router-dom';

const Banner = () => {


      return (
            <>
                  <div className="hero rounded-md  min-h-2/3" style={{ backgroundImage: `url(${bg1})` }}>
                        <div className="hero-overlay rounded-md bg-opacity-60"></div>
                        <div className="hero-content  text-center text-neutral-content">
                              <div className="max-w-md">
                                    <h1 className="mb-5 text-5xl font-bold">Exclusive Toys Special Offer</h1>
                                    <p className="mb-5">Get upto 30% offer on your five purchase.</p>
                                    <Link to='/all-toys'><button className="btn btn-primary rounded-lg">Shop Now</button></Link>
                              </div>
                        </div>
                  </div>
            </>
      );
};

export default Banner;
