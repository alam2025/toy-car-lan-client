import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const MyToys = () => {
      const [myCars, setMyCars]= useState([])
      const {user}=useContext(AuthContext)

      useEffect(()=>{
            fetch(`http://localhost:3000/myToys?email=${user.email}`)
            .then(res=>res.json())
            .then(data=>setMyCars(data))
      },[user])
      console.log(myCars);
      return (
            <div>
                  My Toys :{myCars.length}
            </div>
      );
};

export default MyToys;