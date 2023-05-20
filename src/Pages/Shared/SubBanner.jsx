import React from 'react';
import { useLocation } from 'react-router-dom';

const SubBanner = () => {
      const location = useLocation()
      
      return (
            <div className=' bg-slate-300 rounded-md h-[100px] font-extrabold text-2xl  flex items-center justify-center'>
                  {
                        <h1>{location?.pathname.toUpperCase()}</h1>
                  }
                  
            </div>
      );
};

export default SubBanner;