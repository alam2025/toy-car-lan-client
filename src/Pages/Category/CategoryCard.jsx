import React from 'react';
import ToyDetails from '../ToyDetails/ToyDetails';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const CategoryCard = ({ cars }) => {
      const { _id, pictureUrl, toyName, price, rating } = cars;
      return (
            <div className="border rounded-md  flex flex-col p-6">
                  <img className="rounded-md w-[300px]" src={pictureUrl} alt={toyName} />
                  <div className="flex flex-col  flex-grow">
                        <h3 className="text-xl font-bold my-4">{toyName}</h3>
                        <div className="flex flex-col mb-4 flex-grow">
                              <p>Price: $ {price}</p>
                              <p>Rating: {rating}</p>
                              <Rating
                                    placeholderRating={rating}
                                    readonly
                                    emptySymbol={<AiOutlineStar size={30}/>}
                                    placeholderSymbol={<AiFillStar size={30} className=' text-warning'/>}
                                    fullSymbol={<AiFillStar size={30}/>}
                              />
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