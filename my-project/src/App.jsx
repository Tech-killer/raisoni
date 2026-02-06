import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Feedback from './pages/Feedback';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 text-gray-900 font-sans transition-colors duration-300">
        <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />

        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Sign" element={<SignUp />} />
          <Route path="/login" element={<Login setAuth={setIsAuthenticated} />} />

          {/* Routes accessible to both or specific roles (simplified for valid routing) */}
          <Route path="/project" element={<Projects />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/Pages" element={<Dashboard />} />

          {/* Authenticated Routes */}
          <Route
            path="/Profile"
            element={isAuthenticated ? <Profile /> : <Navigate to="/login" />}
          />
          <Route
            path="/Feedback"
            element={isAuthenticated ? <Feedback /> : <Navigate to="/login" />}
          />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}