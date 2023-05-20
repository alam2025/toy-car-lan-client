import React from 'react';
import TopNavigationBar from '../../Pages/Shared/NavigationBar/TopNavugationBar/TopNavigationBar';

import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Shared/Footer/Footer';

const MainLayout = () => {
      return (
            <div className='my-container flex flex-col min-h-screen '>
                  <TopNavigationBar /> 
                  <Outlet />
                  <Footer />
            </div>
      );
};

export default MainLayout;