import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Activities from './pages/Activities';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Team from './pages/Team';

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: 12, background: '#f6f8fa' }}>
        <Link to="/" style={{ marginRight: 12 }}>Home</Link>
        <Link to="/activities" style={{ marginRight: 12 }}>Activities</Link>
        <Link to="/profile" style={{ marginRight: 12 }}>Profile</Link>
        <Link to="/teams" style={{ marginRight: 12 }}>Teams</Link>
        <Link to="/login" style={{ marginRight: 12 }}>Login</Link>
        <Link to="/register">Register</Link>
      </nav>
      <div style={{ padding: 24, fontFamily: 'sans-serif' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/teams" element={<Team />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
