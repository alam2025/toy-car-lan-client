import React from 'react';
import TopNavigationBar from '../../Pages/Shared/NavigationBar/TopNavugationBar/TopNavigationBar';

import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Shared/Footer/Footer';

const MainLayout = () => {
      return (
            <div className='my-container '>
                  <TopNavigationBar /> 
                  <Outlet />
                  <Footer />
            </div>
      );
};

export default MainLayout;