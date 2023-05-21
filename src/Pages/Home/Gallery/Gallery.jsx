import React, { useEffect, useState } from 'react';

const Gallery = () => {
      const [isLoading, setLoading] = useState(true)
      const [galleryData, setGallerydata] = useState([]);
      useEffect(() => {
            fetch(`https://toy-car-land-server.vercel.app/toys`)
                  .then(res => res.json())
                  .then(data => {
                        data = data.slice(0, 6)
                        setGallerydata(data)
                        setLoading(false)
                  })
      }, [])




      return (
            <div className="container mx-auto py-10">
                  <h2 className="text-3xl font-bold text-center mb-8">Kid's Gallery</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {galleryData.map((item, index) => (
                              <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                                    <img
                                          src={item.pictureUrl}
                                          alt={item.toyName}
                                          className="object-cover w-full  p-6"
                                    />
                                    <div className="bg-white p-4">
                                          <h3 className="text-xl font-semibold">{item.toyName}</h3>
                                    </div>
                              </div>
                        ))}
                  </div>
            </div>
      );
};

export default Gallery;
