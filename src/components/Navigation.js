import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navigation({ user, onLogout }) {
  const navigate = useNavigate();

  // Handle logout action
  const handleLogout = () => {
    onLogout();
    navigate('/'); // Redirect to the home page after logout
  };

  // Define navigation links based on the user's role
  const navLinks = !user
    ? [
        { to: '/', text: 'Home' },
        { to: '/login', text: 'Login' },
        { to: '/register', text: 'Register' },
        { to: '/department-login', text: 'Department' },
        { to: '/admin-login', text: 'Admin' },
      ]
    : user.role === 'admin'
    ? [
        { to: '/admin', text: 'Dashboard' },
        { to: '/add-hod', text: 'Add HOD' },
        { to: '/admin/view-complaints', text: 'View Complaints' },
        { to: '/admin/view-feedback', text: 'View Feedback' },
       
      ]
    : user.role === 'user'
    ? [
        { to: '/user', text: 'Dashboard' },
        { to: '/register-complaint', text: 'Register Complaint' },
        { to: '/check-status', text: 'Check Status' },
        { to: '/send-feedback', text: 'Send Feedback' },
        { to: '/user/profile', text: 'Profile' },
        
      ]
    : user.role === 'department'
    ? [
        { to: '/department-dashboard', text: 'Dashboard' },
        { to: '/department/view-complaints', text: 'View Complaints' },
        { to: '/department/view-feedback', text: 'View Feedback' },
       
      ]
    : [];

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-6">
        <ul className="flex justify-end space-x-6 py-4">
          {navLinks.map((link, index) =>
            link.isLogout ? (
              <li key={index}>
                <button
                  onClick={handleLogout}
                  className="text-gray-700 hover:text-indigo-600 font-semibold uppercase transition duration-300 ease-in-out transform hover:scale-105"
                >
                  {link.text}
                </button>
              </li>
            ) : (
              <li key={index}>
                <Link
                  to={link.to}
                  className="text-gray-700 hover:text-indigo-600 font-semibold uppercase transition duration-300 ease-in-out transform hover:scale-105"
                >
                  {link.text}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
