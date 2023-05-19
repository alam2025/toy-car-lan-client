import React from 'react';
import { Link } from 'react-router-dom';


const ErrorPage = () => {
      return (
            <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
                
                  <h1 className="text-2xl font-bold mb-2">Oops! Something went wrong.</h1>
                  <p className="text-lg text-gray-600">We apologize for the inconvenience.</p>
                  <Link to="/">
                        <button className="btn btn-outline">Back to homepage</button>
                  </Link>
            </div>
      );
};

export default ErrorPage;
