import React from 'react';
import TopNavigationBar from '../../Pages/Shared/NavigationBar/TopNavugationBar/TopNavigationBar';
import SecondNavigationBar from '../../Pages/Shared/NavigationBar/SecondNavigationBar/SecondNavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Shared/Footer/Footer';

const MainLayout = () => {
      return (
            <div className="main-layout">
                  <TopNavigationBar />
                  <SecondNavigationBar />
                  <Outlet />
                  <Footer />
            </div>
      );
};

export default MainLayout;