import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import SubBanner from '../Shared/SubBanner';
import Spinner from '../Shared/Spinner/Spinner';
import Swal from 'sweetalert2';

const MyToys = () => {
      const [myCars, setMyCars] = useState([])
      const { user } = useContext(AuthContext)
      const [isLoading, setLoading] = useState(true)

      useEffect(() => {
            fetch(`https://toy-car-land-server.vercel.app/myToys?email=${user.email}`)
                  .then(res => res.json())
                  .then(data => {
                        setMyCars(data)
                        setLoading(false)
                  })
      }, [user])



      const handleDelete = (id) => {

            Swal.fire({
                  title: 'Are you sure?',
                  text: "You won't be able to revert this!",
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Yes, Delete it!'
            }).then((result) => {
                  if (result.isConfirmed) {
                        fetch(`http://localhost:3000/toy/${id}`, {
                              method: 'DELETE'
                        })
                              .then(res => res.json())
                              .then(data => {
                                    if (data.deletedCount) {
                                          Swal.fire(
                                                'Deleted!',
                                                'Your file has been Deleted.',
                                                'success'
                                          )
                                    }
                                    const remaining = myCars.filter(car => car._id !== id);
                                    setMyCars(remaining)

                              })

                  }
            })

            //


      }

      return (
            <div>
                  <SubBanner />
                  {
                        isLoading && <Spinner />
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
                                                      <Link title='Click to Delete' onClick={() => handleDelete(myCar._id)}>X</Link>
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