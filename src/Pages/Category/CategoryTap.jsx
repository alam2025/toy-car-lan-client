import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {

      const [categories, setCategories] = useState([])


      useEffect(() => {
            fetch('https://toy-car-land-server.vercel.app/categories')
                  .then(res => res.json())
                  .then(data => setCategories(data))
      }, [])
      return (
            <Tabs>
                  <TabList className="flex">
                        {
                              categories.map(category => <Tab key={category._id}
                                    className="py-2 me-4 text-xl  font-semibold border-b-2 border-transparent hover:border-blue-500 cursor-pointer">
                                    {category.name}
                              </Tab>)
                        }
                  </TabList>
                  {
                        categories.map(category => <TabPanel 
                        key={category._id}>
                              {category.subCategories.map(sc => <div className='my-4'
                                    key={sc.id}>
                                    <Link to={`/${sc.name}`} className=' py-2 px-4 rounded-md bg-slate-200 '>{sc.name}</Link>
                              </div>)}


                        </TabPanel>)
                  }


            </Tabs>
      );
};

export default ShopByCategory;
