import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header({ user, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Show confirmation popup
    const isConfirmed = window.confirm('Are you sure you want to log out?');

    if (isConfirmed) {
      // Call the onLogout function passed down as a prop
      onLogout();

      // Navigate to the home page (default route)
      navigate('/');
    }
  };

  return (
    <header className="bg-yellow-400 py-3 px-6 flex justify-between items-center">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold">Public Grievance Redressal System</h1>
      </div>
      {user && (
        <button 
          onClick={handleLogout} 
          className="flex bg-red-500 text-white py-auto px-2 rounded hover:bg-red-600"
        >
          LOGOUT
        </button>
      )}
    </header>
  );
}

export default Header;
