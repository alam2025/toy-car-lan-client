import React from 'react';

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
                  <button className=" btn btn-warning mt-auto">Show More</button>
            </div>
      );
};

export default CategoryCard;