import React from 'react';

const Sellers = () => {
      return (
            <div className='my-8 '>
                  <h1 className=' text-center text-3xl  font-extrabold mb-8'>Our Seller's</h1>
                  <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        
                        <div className=' border p-4 rounded-md shadow'>
                              <img className=' rounded  w-full' src="https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.jpg?b=1&s=170667a&w=0&k=20&c=KZM6TIhdaJAy28BA9sg0Sn-ZRd160F6HytdAKykza-s=" alt="" />
                              <div className='mt-3'>
                                    <h3 className=' text-xl font-bold'>Jemes Jone</h3>
                                    <div>
                                          <p>Email: example@gmail.com</p>
                                          <p>Phone : 01xxxxxxxx</p>
                                    </div>
                              </div>
                        </div>
                        <div className=' border p-4 rounded-md shadow'>
                              <img className=' rounded  w-full' src="https://media.istockphoto.com/id/1406197730/photo/portrait-of-a-young-handsome-indian-man.jpg?b=1&s=170667a&w=0&k=20&c=KtmKHyOE6MJV0w2DiGX8P4399KHNbZ3p8lCjTEabGcY=" alt="" />
                              <div className='mt-3'>
                                    <h3 className=' text-xl font-bold'>Willium Junior</h3>
                                    <div>
                                          <p>Email: example@gmail.com</p>
                                          <p>Phone : 01xxxxxxxx</p>
                                    </div>
                              </div>
                        </div>
                        <div className=' border p-4 rounded-md shadow'>
                              <img className=' rounded  w-full' src="https://media.istockphoto.com/id/1365997131/photo/portrait-of-mid-20s-african-american-man-outdoors-at-dusk.jpg?b=1&s=170667a&w=0&k=20&c=_XMq-GZm_VV-N_kS8KCHp1nNjhdKkaLz0JgRdl3OlAk=" alt="" />
                              <div className='mt-3'>
                                    <h3 className=' text-xl font-bold'>John Break</h3>
                                    <div>
                                          <p>Email: example@gmail.com</p>
                                          <p>Phone : 01xxxxxxxx</p>
                                    </div>
                              </div>
                        </div>
                      

                  </div>
            </div>
      );
};

export default Sellers;