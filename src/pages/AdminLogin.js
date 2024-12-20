import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLogin({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempted with:', { username, password });

    // Default credentials for admin login
    if (username === 'admin' && password === 'admin') {
      alert('Login Successful!');
      
      // Set the user data in the parent component (App.js) via onLogin
      const userData = { username, role: 'admin' };
      onLogin(userData);

      // Redirect to Admin Dashboard
      navigate('/admin');
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <main className="flex-grow container mx-auto px-6 py-8">
        <h2 className="text-xl font-semibold text-center mb-8">WELCOME ADMIN</h2>

        <div className="bg-white p-8 rounded-lg shadow max-w-md mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-center">Admin Login</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="username" className="block font-medium">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="admin"
                className="border rounded w-full px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor="password" className="block font-medium">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••"
                className="border rounded w-full px-3 py-2"
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
              Login
            </button>
            {error && <p className="text-red-500 text-center mt-2">{error}</p>}
          </form>
        </div>
      </main>
    </div>
  );
}

export default AdminLogin;
