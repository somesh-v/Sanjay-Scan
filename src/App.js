import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Scans from './pages/Scans';
import Doppler from './pages/Doppler';
import Obestrics from './pages/Obestrics';
import TwinGestation from './pages/TwinGestation';
import Multiple from './pages/Multiple';
import Abdomen from './pages/Abdomen';
import ThyroidBreast from './pages/ThyroidBreast';
import Packages from './pages/Packages';
import ReportsPage from './pages/ReportsPage';
import Book from './pages/Book';
import './assets/fonts/fonts.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/scans" element={<Scans />} />
        <Route path="/scans/doppler" element={<Doppler />} />
        <Route path="/scans/obestrics" element={<Obestrics />} />
        <Route path="/scans/twin-gestation" element={<TwinGestation />} />
        <Route path="/scans/multiple" element={<Multiple />} />
        <Route path="/scans/abdomen" element={<Abdomen />} />
        <Route path="/scans/thyroid-breast" element={<ThyroidBreast />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/book" element={<Book />} />
      </Routes> */
    </div>
  );
}

export default App;