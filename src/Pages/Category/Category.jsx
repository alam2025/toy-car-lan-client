import React, { useEffect, useState } from 'react';
import ShopByCategory from './CategoryTap';
import { useLoaderData, useParams } from 'react-router-dom';
import CategoryCard from './CategoryCard';

const Category = () => {
      const [subCategoriesData, setSubcategoriesData]=useState([])
      const { name } = useParams()
      console.log(name);

      useEffect(() => {
            fetch(`http://localhost:3000/category-toys?subCategory=${name || 'Standard Sports Car'}`)
                  .then(res => res.json())
                  .then(data => setSubcategoriesData(data))
      }, [name])
      return (
            <div className=' grid md:grid-flow-col md:auto-cols-max gap-4  my-20'>
                  <div className=' '>
                        <h1 className=' text-2xl font-bold'>Shop By Category</h1>
                        <ShopByCategory />

                  </div>
                  <div className=' grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        {
                              subCategoriesData.map(data=><CategoryCard
                              key={data._id}
                              cars ={data}
                              />)
                        }
                  </div>
            </div>
      );
};

export default Category;