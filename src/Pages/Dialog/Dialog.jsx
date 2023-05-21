import React from 'react';
import { FaGlobe, FaPhone, FaShippingFast } from "react-icons/fa";
import { GrSecure } from "react-icons/gr";
const Dialog = () => {
      return (
            <div className=' grid grid-cols-2 gap-2 lg:grid-cols-4 border p-4 rounded-md my-4 '>
                  <div className=' flex gap-3 justify-center items-center'>
                        <FaShippingFast size={40} />
                        <div >
                              <h3 className=' text-lg font-bold'>Free Shipping</h3>
                              <p className=' font-thin'>On all orders over $75.00

                              </p>
                        </div>
                  </div>
                  <div className=' flex gap-3 justify-center items-center'>
                        <FaGlobe size={40} />
                        <div >
                              <h3 className=' text-lg font-bold'>Free Returns</h3>
                              <p className=' font-thin'>Returns are free within 9 days</p>
                        </div>
                  </div>
                  <div className=' flex gap-3 justify-center items-center'>
                        <GrSecure size={40} />
                        <div >
                              <h3 className=' text-lg font-bold'>100% Payment Secure</h3>
                              <p className=' font-thin'>Your payment are safe with us. </p>
                        </div>
                  </div>
                  <div className=' flex gap-3 justify-center items-center'>
                        <FaPhone size={40} />
                        <div >
                              <h3 className=' text-lg font-bold'>Support 24/7</h3>
                              <p className=' font-thin'>Contact us 24 hours a day</p>
                        </div>
                  </div>
            </div>
      );
};

export default Dialog;