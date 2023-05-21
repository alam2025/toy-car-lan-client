import React, { useContext } from 'react';
import { Toaster, toast, useToaster } from 'react-hot-toast';
import { AuthContext } from '../../Provider/AuthProvider';

const AddToy = () => {
      const toaster = useToaster();
      const {user}=useContext(AuthContext)


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
            console.log(newCar);
            fetch('http://localhost:3000/addCar', {
                  method: 'POST',
                  headers: {
                        'content-type': 'application/json'
                  },
                  body: JSON.stringify(newCar)
            })
                  .then(res => res.json())
                  .then(data => {
                        if (data.insertedId) {

                              toast.success('Successfully a New Car Added !!!', { duration: 2000 });
                              form.reset()


                        }
                  })



      };



      return (
            <div className="min-h-screen mb-4 ">
                  <div className=" ">
                        <div className="text-center lg:text-left my-8">
                              <h1 className="text-3xl font-bold">ADD A CAR!</h1>

                        </div>
                        <div className="card  shadow-2xl bg-base-100">
                              <form onSubmit={handleSubmit} className="card-body grid grid-cols-1 md:grid-cols-2 gap-4">

                                    <div className="form-control border-0">
                                          <label className="label">
                                                <span className="label-text text-xl font-semibold">Car Name</span>
                                          </label>
                                          <input type="text" placeholder="Enter Car name" className="input input-bordered" name='carname' required />
                                    </div>
                                    <div className="form-control border-0">
                                          <label className="label">
                                                <span className="label-text text-xl font-semibold">Car Brand
                                                </span>
                                          </label>
                                          <input type="text" placeholder="Enter car Brand" className="input input-bordered" name='carBrand' required />
                                    </div>
                                    <div className="form-control border-0">
                                          <label className="label">
                                                <span className="label-text text-xl font-semibold">Car PhotoUrl</span>
                                          </label>
                                          <input type="text" placeholder="PhotoUrl" className="input input-bordered" name='photourl' required />
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
                                                <span className="label-text text-xl font-semibold">Sub Category</span>
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
                                          <input type="text" placeholder="Price" className="input input-bordered" required name='price' />
                                    </div>
                                    <div className="form-control border-0">
                                          <label className="label">
                                                <span className="label-text text-xl font-semibold">Rating</span>
                                          </label>
                                          <input type="text" placeholder="Rating" className="input input-bordered" required name='rating' />
                                    </div>
                                    <div className="form-control border-0">
                                          <label className="label">
                                                <span className="label-text text-xl font-semibold">Available quantity</span>
                                          </label>
                                          <input type="text" placeholder="quantity" className="input input-bordered" required name='quantity' />
                                    </div>
                                    <div className="form-control border-0">
                                          <label className="label">
                                                <span className="label-text text-xl font-semibold">Description</span>
                                          </label>
                                          <textarea placeholder='Enter the Car description' className=" border p-4 rounded-md" name="decription" id="" cols="30" rows="4"></textarea>
                                    </div>

                                    <div className="form-control mt-6 border-0 pb-8">
                                          <button className="btn btn-primary">Submit </button>
                                    </div>
                              </form>

                        </div>
                  </div>
                  <Toaster />
            </div>
      );
};

export default AddToy;
