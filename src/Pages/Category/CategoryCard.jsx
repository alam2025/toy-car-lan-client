import React from 'react';
import ToyDetails from '../ToyDetails/ToyDetails';
import { Link } from 'react-router-dom';

const CategoryCard = ({ cars }) => {
      const { _id,pictureUrl, toyName, price, rating } = cars;
      return (
            <div className="border rounded-md  flex flex-col">
                  <img className="rounded-md w-[400px]" src={pictureUrl} alt={toyName} />
                  <div className="flex flex-col px-8 flex-grow">
                        <h3 className="text-xl font-bold my-4">{toyName}</h3>
                        <div className="flex flex-col mb-4 flex-grow">
                              <p>Price: $ {price}</p>
                              <p>Rating: {rating}</p>
                        </div>

                  </div>
                  
                  {/* modal  */}
                  <div>
                       <Link className="btn btn-outline" to={`/toy-details/${_id}`}> View Details</Link>

                        
                       
                  </div>
                  {/* modal  */}
            </div>
      );
};

export default CategoryCard;