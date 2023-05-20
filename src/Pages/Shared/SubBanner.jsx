import React from 'react';
import { useLocation } from 'react-router-dom';

const SubBanner = () => {
      const location = useLocation()
      const newLocation= location?.pathname.split('/')[1]
     
      
      return (
            <div className=' bg-slate-300 rounded-md h-[100px] font-extrabold text-2xl  flex items-center justify-center'>
                  {
                        <h1>{newLocation.toUpperCase()}</h1>
                  }
                  
            </div>
      );
};

export default SubBanner;