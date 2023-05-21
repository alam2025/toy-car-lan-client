import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import SubBanner from '../Shared/SubBanner';
import Spinner from '../Shared/Spinner/Spinner';

const MyToys = () => {
      const [myCars, setMyCars] = useState([])
      const { user } = useContext(AuthContext)
      const [isLoading,setLoading]=useState(true)

      useEffect(() => {
            fetch(`https://toy-car-land-server.vercel.app/myToys?email=${user.email}`)
                  .then(res => res.json())
                  .then(data => {
                        setMyCars(data)
                        setLoading(false)
                  })
      }, [user])

      return (
            <div>
                  <SubBanner />
                  {
                        isLoading&&<Spinner/>
                  }
                  <div className="overflow-x-auto my-12">
                        <table className="table w-full">
                              {/* head */}
                              <thead>
                                    <tr className=' text-2xl font-extrabold'>
                                          <th>Seller</th>
                                          <th>Toy Name</th>
                                          <th>Sub-category</th>
                                          <th>Price</th>
                                          <th>Quantity</th>
                                          <th>View </th>
                                          <th>Edit</th>
                                          <th>Delete</th>
                                    </tr>
                              </thead>
                              <tbody>

                                    {
                                          myCars.map(myCar => <tr key={myCar._id}>

                                                <td>
                                                      <div className="flex items-center space-x-3">
                                                            <div className="avatar">
                                                                  <div className="mask mask-squircle w-12 h-12">
                                                                        <img src={myCar.pictureUrl} alt="Avatar Tailwind CSS Component" />
                                                                  </div>
                                                            </div>
                                                            <div>
                                                                  <div className="font-bold">{myCar.sellerName}</div>
                                                                  
                                                            </div>
                                                      </div>
                                                </td>
                                                <td>{myCar.toyName}</td>
                                                <td>{myCar.subCategory}</td>
                                                <td>${myCar.price}</td>
                                                <td>{myCar.availableQuantity}</td>
                                                <td>



                                                      <Link className="btn btn-outline" to={`/toy-details/${myCar._id}`}> View Details</Link>
                                                </td>
                                                <td>
                                                      <Link to={`/update-Car/${myCar._id}`}>Edit</Link>
                                                </td>
                                                <td>
                                                      <Link>X</Link>
                                                </td>
                                          </tr>)
                                    }
                                    {/* row 1 */}


                              </tbody>
                        </table>
                  </div>
            </div>
      );
};

export default MyToys;