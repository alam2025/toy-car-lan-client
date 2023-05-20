import React from 'react';
import ToyDetails from '../ToyDetails/ToyDetails';

const CategoryCard = ({ cars }) => {
      const { pictureUrl, toyName, price, rating } = cars;
      return (
            <div className="border rounded-md  flex flex-col">
                  <img className="rounded-md ]" src={pictureUrl} alt={toyName} />
                  <div className="flex flex-col px-8 flex-grow">
                        <h3 className="text-xl font-bold my-4">{toyName}</h3>
                        <div className="flex flex-col mb-4 flex-grow">
                              <p>Price: $ {price}</p>
                              <p>Rating: {rating}</p>
                        </div>

                  </div>
                  
                  {/* modal  */}
                  <div>
                        <label htmlFor="my-modal-5" className="btn btn-outline">View Details</label>

                        <ToyDetails cars={cars} key={cars._id}/>
                       
                  </div>
                  {/* modal  */}
            </div>
      );
};

export default CategoryCard;