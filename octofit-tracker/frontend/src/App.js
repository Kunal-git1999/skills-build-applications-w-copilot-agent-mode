import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Activities from './pages/Activities';

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: 12, background: '#f6f8fa' }}>
        <Link to="/" style={{ marginRight: 12 }}>Home</Link>
        <Link to="/activities">Activities</Link>
      </nav>
      <div style={{ padding: 24, fontFamily: 'sans-serif' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activities" element={<Activities />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
