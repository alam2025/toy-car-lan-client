import React, { useContext } from 'react';
import { Toaster, toast, useToaster } from 'react-hot-toast';
import { AuthContext } from '../../Provider/AuthProvider';
import { useLoaderData } from 'react-router-dom';

const UpdateCar = () => {
      const toaster = useToaster();
      const { user } = useContext(AuthContext)
      const myCar= useLoaderData()
      const {_id,toyName,carBrand,pictureUrl,sellerName,sellerEmail,subCategory,price,rating,availableQuantity,description}=myCar


      const handleSubmit = (e) => {
            e.preventDefault();

            const form = e.target;

            const toyName = form.carname.value;
            const carBrand = form.carBrand.value;
            const pictureUrl = form.photourl.value;
            const sellerName = form.seller.value;
            const sellerEmail = form.email.value;
            const subCategory = form.subCategory.value;
            const price = form.price.value;
            const rating = form.rating.value;
            const availableQuantity = form.quantity.value;
            const description = form.decription.value;

            // console.log(toyName, carBrand, pictureUrl, sellerEmail, sellerName, subCategory, price, rating, availableQuantity, description);
            const newCar = { toyName, carBrand, pictureUrl, sellerEmail, sellerName, subCategory, price, rating, availableQuantity, description };
            
            fetch(`http://localhost:3000/toy/${_id}`,{
                  method:'PUT',
                  headers:{
                        'content-type':'application/json'
                  },
                  body:JSON.stringify(newCar)
            })
            .then(res=>res.json())
            .then(data=>{
                  console.log(data);
            })




      };

      return (
            <div className="min-h-screen mb-4 ">
                  <div className=" ">
                        <div className="text-center lg:text-left my-8">
                              <h1 className="text-3xl font-bold">Update <span className=' text-warning'>{myCar.toyName}</span> Info</h1>

                        </div>
                        <div className="card  shadow-2xl bg-base-100">
                              <form onSubmit={handleSubmit} className="card-body grid grid-cols-1 md:grid-cols-2 gap-4">

                                    <div className="form-control border-0">
                                          <label className="label">
                                                <span className="label-text text-xl font-semibold">Car Name</span>
                                          </label>
                                          <input type="text" placeholder="Enter Car name" className="input input-bordered" name='carname' required defaultValue={toyName} />
                                    </div>
                                    <div className="form-control border-0">
                                          <label className="label">
                                                <span className="label-text text-xl font-semibold">Car Brand
                                                </span>
                                          </label>
                                          <input type="text" placeholder="Enter car Brand" className="input input-bordered" name='carBrand' defaultValue={carBrand} required />
                                    </div>
                                    <div className="form-control border-0">
                                          <label className="label">
                                                <span className="label-text text-xl font-semibold">Car PhotoUrl</span>
                                          </label>
                                          <input type="text" placeholder="PhotoUrl" className="input input-bordered" name='photourl' defaultValue={pictureUrl} required />
                                    </div>
                                    <div className="form-control border-0">
                                          <label className="label">
                                                <span className="label-text text-xl font-semibold">Seller Name</span>
                                          </label>
                                          <input type="text" placeholder="Enter Seller name" className="input input-bordered" required name='seller' defaultValue={user.displayName} readOnly />
                                    </div>
                                    <div className="form-control border-0">
                                          <label className="label">
                                                <span className="label-text text-xl font-semibold">Seller Email</span>
                                          </label>
                                          <input type="email" placeholder="Enter Seller email" className="input input-bordered" required name='email' defaultValue={user.email} readOnly />
                                    </div>


                                    <div className="form-control w-full border-0">
                                          <label className="label">
                                                <span className="label-text text-xl font-semibold" defaultValue={subCategory}>Sub Category</span>
                                          </label>
                                          <select className="select select-bordered" name='subCategory' required>
                                                <optgroup label="Sports Car">
                                                      <option>Standard Sports Car</option>
                                                      <option>Supercar</option>
                                                      <option>Hypercar</option>
                                                </optgroup>
                                                <optgroup label="Truck">
                                                      <option>Dump Truck</option>
                                                      <option>Tanker Truck</option>
                                                      <option>Flatbed Truck</option>
                                                </optgroup>
                                                <optgroup label="Police Car">
                                                      <option>Patrol Car</option>
                                                      <option>SUVs and Trucks</option>
                                                      <option>Pursuit Cars</option>
                                                </optgroup>

                                          </select>
                                    </div>

                                    <div className="form-control border-0">
                                          <label className="label">
                                                <span className="label-text text-xl font-semibold">Price</span>
                                          </label>
                                          <input type="text" placeholder="Price" className="input input-bordered" required name='price' defaultValue={price} />
                                    </div>
                                    <div className="form-control border-0">
                                          <label className="label">
                                                <span className="label-text text-xl font-semibold">Rating</span>
                                          </label>
                                          <input type="text" placeholder="Rating" className="input input-bordered" required name='rating' defaultValue={rating} />
                                    </div>
                                    <div className="form-control border-0">
                                          <label className="label">
                                                <span className="label-text text-xl font-semibold">Available quantity</span>
                                          </label>
                                          <input type="text" placeholder="quantity" className="input input-bordered" required name='quantity' defaultValue={availableQuantity}/>
                                    </div>
                                    <div className="form-control border-0">
                                          <label className="label">
                                                <span className="label-text text-xl font-semibold">Description</span>
                                          </label>
                                          <textarea placeholder='Enter the Car description'defaultValue={description} className=" border p-4 rounded-md" name="decription" id="" cols="30" rows="4"></textarea>
                                    </div>

                                    <div className="form-control mt-6 border-0 pb-8">
                                          <button className="btn btn-primary">Update </button>
                                    </div>
                              </form>

                        </div>
                  </div>
                  <Toaster />
            </div>
      );
};

export default UpdateCar;