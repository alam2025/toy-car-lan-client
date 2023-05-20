import React from 'react';

const ToyDetails = ({cars}) => {
      return (
            <div>
                  <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                  <div className="modal">
                        <div className="modal-box w-11/12 max-w-5xl">

                              <div className="flex gap-3 flex-col md:flex-row justify-center items-center ">
                                    <figure><img src={cars.pictureUrl} alt="Movie" /></figure>
                                    <div className="card-body">
                                          <h2 className="card-title">{cars.toyName}</h2>
                                          <div>
                                                <h1 className=' text-xl font-bold'>Seller Info: </h1>
                                                <p> {cars.sellerName}</p>
                                                <p> {cars.sellerEmail}</p>
                                          </div>
                                          <div>
                                                <h1 className=' text-xl font-bold'>Description : </h1>
                                                <span>{cars.description}</span>
                                          </div>
                                          <div>
                                                <p><span className=' text-xl font-semibold'>Quantity :</span> {cars.availableQuantity}</p>
                                                <p><span className=' text-xl font-semibold'>Price :</span> ${cars.price}</p>
                                                <p><span className=' text-xl font-semibold'>Rating :</span> {cars.rating}</p>

                                          </div>

                                    </div>
                              </div>

                              <div className="modal-action">
                                    <label htmlFor="my-modal-5" className="btn">Ok</label>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default ToyDetails;