import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation} from 'react-router-dom';

const PrivateRoute = ( {children}) => {
      const {loading,user}= useContext(AuthContext)
      const location = useLocation()

      if(loading)
      {
            return <div className=' flex flex-col justify-center items-center'>
                  <progress className="progress w-56"></progress>
                 
            </div>
      }
      if(user){
            return children
      }
      
      return <Navigate state={{from:location}}  to='/login' replace></Navigate>
};

export default PrivateRoute;