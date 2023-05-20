import React, { useEffect, useState } from 'react';
import ShopByCategory from './CategoryTap';
import { useLoaderData, useParams } from 'react-router-dom';
import CategoryCard from './CategoryCard';

const Category = () => {
      const [subCategoriesData, setSubcategoriesData]=useState([])
      const { name } = useParams()
      console.log(subCategoriesData);

      useEffect(() => {
            fetch(`http://localhost:3000/category-toys?subCategory=${name}`)
                  .then(res => res.json())
                  .then(data => setSubcategoriesData(data))
      }, [name])
      return (
            <div className=' grid md:grid-flow-col md:auto-cols-max gap-4  my-20'>
                  <div className=' '>
                        <h1 className=' text-2xl font-bold'>Shop By Category</h1>
                        <ShopByCategory />

                  </div>
                  <div>
                        {
                              subCategoriesData.map(data=><CategoryCard
                              />)
                        }
                  </div>
            </div>
      );
};

export default Category;