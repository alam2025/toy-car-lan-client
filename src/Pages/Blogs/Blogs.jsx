// BlogPage.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SubBanner from '../Shared/SubBanner';

const Blog = () => {
      const [blogs, setBlogs] = useState([]);

      useEffect(() => {
            // Fetch blog data from an API endpoint or a JSON file
            // Update the 'blogs' state with the fetched data
            const fetchBlogs = async () => {
                  try {
                        const response = await fetch('http://localhost:3000/blogs');
                        const data = await response.json();
                        setBlogs(data);
                  } catch (error) {
                        console.error('Error fetching blogs:', error);
                  }
            };

            fetchBlogs();
      }, []);

      return (
            <div className="container mx-auto">
                  <SubBanner />


                  <div className=' my-8'>
                        {blogs.map((blog) => (
                              <div key={blog.id} className="mb-8 border px-8 py-8 rounded-md">
                                    <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
                                    <p className="text-gray-600 mb-4 text-justify">{blog.date}</p>
                                    <p className=' text-justify'>{blog.content}</p>
                              </div>
                        ))}
                  </div>

                  <Link to="/" className="text-blue-500 hover:underline">
                        Back to Home
                  </Link>
            </div>
      );
};

export default Blog;
