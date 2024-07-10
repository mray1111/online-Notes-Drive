import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Remove the token from localStorage
    localStorage.removeItem('token');
    // Navigate to the home page
    navigate('/');
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 mt-40">
      <h1 className="text-2xl font-bold">Logout successfully</h1>
    </div>
  );
};

export default Logout;
