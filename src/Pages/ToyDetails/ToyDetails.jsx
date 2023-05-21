import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SubBanner from '../Shared/SubBanner';

const ToyDetails = () => {
      const cars= useLoaderData()
     
      const {pictureUrl,description,sellerEmail,price,rating,sellerName,toyName,availableQuantity}=cars;
      
      return (
            <div>
                  <SubBanner/>

                  <div className='flex justify-center items-center gap-4 md:flex-row flex-col border my-8 py-10 px-8 shadow-md rounded-md'>
                        <img src={pictureUrl} alt={toyName} />
                        <div className='flex flex-col gap-4 divide-y-2'>
                              <h1 className=' text-2xl font-extrabold'>{toyName}</h1>
                              <div>
                                    <h4 className=' text-xl font-semibold'>Seller Info:</h4>
                                    <p>{sellerName}</p>
                                    <p>{sellerEmail}</p>
                              </div>
                              <div>
                                    <h4 className=' text-xl font-semibold'>Description:</h4>
                                    <p>{description}</p>
                              </div>
                              <div>

                                    <p><span className=' text-xl font-semibold'>Available Quantity : </span> {availableQuantity}</p>
                                    <p><span className=' text-xl font-semibold'>Price : </span>$ {price}</p>
                                    <p><span className=' text-xl font-semibold'>Rating : </span> {rating}</p>
                              </div>
                        </div>
                       
                  </div>
            </div>
      );
};

export default ToyDetails;