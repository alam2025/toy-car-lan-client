import React from 'react';
import { Link } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {
      return (
            <Tabs>
                  <TabList className="flex">
                        <Tab className="py-2 px-4 mx-2 font-semibold border-b-2 border-transparent hover:border-blue-500 cursor-pointer">
                              Sports Car
                        </Tab>
                        <Tab className="py-2 px-4 mx-2 font-semibold border-b-2 border-transparent hover:border-blue-500 cursor-pointer">
                              Truck
                        </Tab>
                        <Tab className="py-2 px-4 mx-2 font-semibold border-b-2 border-transparent hover:border-blue-500 cursor-pointer">
                              Police Car
                        </Tab>
                  </TabList>

                  <TabPanel>
                        <div><Link>Standard Sports Car</Link></div>
                        <div><Link>Supercar</Link></div>
                        <div><Link>Hypercar</Link></div>

                  </TabPanel>
                  <TabPanel className=' flex flex-col gap-6'>
                        <div><Link>Dump truck</Link></div>
                        <div> <Link>Tanker truck</Link> </div>
                        <div><Link>Flatbed truck</Link></div>
                  </TabPanel>
                  <TabPanel>
                        <div><Link>Patrol Car</Link></div>
                        <div> <Link>SUVs and Trucks</Link> </div>
                        <div><Link>Pursuit cars</Link></div>
                  </TabPanel>
            </Tabs>
      );
};

export default ShopByCategory;
