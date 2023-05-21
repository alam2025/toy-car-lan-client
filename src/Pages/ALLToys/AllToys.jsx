import React, { useContext, useEffect, useState } from 'react';
import SubBanner from '../Shared/SubBanner';
import { Link, useLoaderData } from 'react-router-dom';
import Spinner from '../Shared/Spinner/Spinner';



const AllToys = () => {
      const [isLoading,setLoading]=useState(true)
     
      const loadToys = useLoaderData();
      
      const [toys, setToys] = useState(loadToys);
     
      const [searchTerm, setSearchTerm] = useState('');
      useEffect(() => {
            if (toys.length > 20) {
              const newToys = toys.slice(0, 20);
              setToys(newToys);
            }
            setLoading(false);
          }, [toys]);
     

     

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
                  {
                        isLoading && <Spinner/>
                  }
                
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

                                                     

                                                <Link className="btn btn-outline" to={`/toy-details/${toy._id}`}> View Details</Link>
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

export default AllToys;