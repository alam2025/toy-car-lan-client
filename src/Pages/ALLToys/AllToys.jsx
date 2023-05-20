import React, { useState } from 'react';
import SubBanner from '../Shared/SubBanner';
import { Link, useLoaderData } from 'react-router-dom';
import ToyDetails from '../ToyDetails/ToyDetails';


const AllToys = () => {
      const loadToys = useLoaderData();
      const [toys, setToys] = useState(loadToys);
      const [searchTerm, setSearchTerm] = useState('');
      if (toys.length > 20) {
            const newToys = toys.slice(0, 20)
            setToys(newToys)
      }



      const handleSearch = (e) => {
            setSearchTerm(e.target.value);
            // const filteredToys = toys.filter((toy) =>
            //       toy.toyName.toLowerCase().includes(searchTerm.toLowerCase())
            // );

            // if (filteredToys) {
            //       setToys(filteredToys)
            // }

      };




      return (
            <div>
                  <SubBanner />
                  <div>
                        <input
                              type="text"
                              placeholder="Search by toy name"
                              value={searchTerm}
                              onChange={handleSearch}
                        />
                  </div>
                  <div className="overflow-x-auto my-12">
                        <table className="table w-full">
                              {/* head */}
                              <thead>
                                    <tr className=' text-2xl font-extrabold'>
                                          <th>Seller</th>
                                          <th>Toy Name</th>
                                          <th>Sub-category</th>
                                          <th>Price</th>
                                          <th>Available Quantity</th>
                                          <th>View Details button</th>
                                    </tr>
                              </thead>
                              <tbody>

                                    {
                                          toys.map(toy => <tr key={toy._id}>

                                                <td>{toy.sellerName}</td>
                                                <td>{toy.toyName}</td>
                                                <td>{toy.subCategory}</td>
                                                <td>${toy.price}</td>
                                                <td>{toy.availableQuantity}</td>
                                                <td>

                                                     

                                                      {/* modal  */}
                                                      <label htmlFor="my-modal-5" className="btn btn-outline">View Details</label>
                                                      <ToyDetails key={toy._id} cars={toy}/>
                                                      {/* modal  */}
                                                </td>
                                          </tr>)
                                    }
                                    {/* row 1 */}


                              </tbody>
                        </table>
                  </div>
                  {/* modal  */}

            </div>
      );
};

export default AllToys;