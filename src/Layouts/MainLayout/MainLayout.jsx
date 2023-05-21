import React, { createContext, useState } from 'react';
import TopNavigationBar from '../../Pages/Shared/NavigationBar/TopNavugationBar/TopNavigationBar';

import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Shared/Footer/Footer';

export const SpinnerContext = createContext(null)
const MainLayout = () => {
      const [isLoading, setLoading] = useState(true)
      const spinnerInfo = { isLoading, setLoading }
      return (
            <div className='my-container flex flex-col min-h-screen '>
                  <SpinnerContext.Provider value={spinnerInfo}>
                        <TopNavigationBar />
                        <Outlet />
                        <Footer />
                  </SpinnerContext.Provider>
            </div>
      );
};

export default MainLayout;