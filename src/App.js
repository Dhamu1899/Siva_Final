import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './components/Home';
import UserLogin from './pages/UserLogin';
import Register from './pages/Register';
import AdminLogin from './pages/AdminLogin';
import DepartmentLogin from './pages/DepartmentLogin';
import AdminDashboard from './pages/AdminDashboard';
import AddHodPage from './pages/AddHodPage';
import ViewComplaints from './pages/ViewComplaints';
import ViewFeedback from './pages/ViewFeedback';
import UserDashboard from './pages/UserDashboard';
import RegisterComplaint from './pages/RegisterComplaint';
import CheckStatus from './pages/CheckStatus';
import SendFeedback from './pages/SendFeedback';
import UserProfile from './pages/UserProfile';
import DepartmentDashboard from './pages/DepartmentDashboard';
import DepartmentViewComplaints from './pages/DepartmentViewComplaints';
import DepartmentViewFeedback from './pages/DepartmentViewFeedback';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Router>
        <Header user={user} onLogout={handleLogout} />
        <Navigation user={user} onLogout={handleLogout} />
        <main className="flex-grow container mx-auto px-6 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<UserLogin onLogin={handleLogin} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin-login" element={<AdminLogin onLogin={handleLogin} />} />
            <Route path="/department-login" element={<DepartmentLogin onLogin={handleLogin} />} />
            

            {/* Admin Routes */}
            <Route
              path="/admin"
              element={user && user.role === 'admin' ? <AdminDashboard /> : <Navigate to="/admin-login" />}
            />
            <Route
              path="/add-hod"
              element={user && user.role === 'admin' ? <AddHodPage /> : <Navigate to="/admin-login" />}
            />
            <Route
              path="/admin/view-complaints"
              element={user && user.role === 'admin' ? <ViewComplaints /> : <Navigate to="/admin-login" />}
            />
            <Route
              path="/admin/view-feedback"
              element={user && user.role === 'admin' ? <ViewFeedback /> : <Navigate to="/admin-login" />}
            />

            {/* User Routes */}
            <Route
              path="/user"
              element={user && user.role === 'user' ? <UserDashboard /> : <Navigate to="/login" />}
            />
            <Route
              path="/register-complaint"
              element={user && user.role === 'user' ? <RegisterComplaint /> : <Navigate to="/login" />}
            />
            <Route
              path="/check-status"
              element={user && user.role === 'user' ? <CheckStatus /> : <Navigate to="/login" />}
            />
            <Route
              path="/send-feedback"
              element={user && user.role === 'user' ? <SendFeedback /> : <Navigate to="/login" />}
            />
            <Route
              path="/user/profile"
              element={user && user.role === 'user' ? <UserProfile /> : <Navigate to="/login" />}
            />

            {/* Department Routes */}
            <Route
              path="/department-dashboard"
              element={user && user.role === 'department' ? <DepartmentDashboard /> : <Navigate to="/department-login" />}
            />
            <Route
              path="/department/view-complaints"
              element={user && user.role === 'department' ? <DepartmentViewComplaints /> : <Navigate to="/department-login" />}
            />
            <Route
              path="/department/view-feedback"
              element={user && user.role === 'department' ? <DepartmentViewFeedback /> : <Navigate to="/department-login" />}
            />
            <Route
              path="/department/profile"
              element={user && user.role === 'department' ? <UserProfile /> : <Navigate to="/department-login" />}
            />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
