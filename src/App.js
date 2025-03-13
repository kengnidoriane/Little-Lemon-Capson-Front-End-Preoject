import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage'; // Assurez-vous d'importer vos composants
import './App.css'
import BookingPage from './pages/BookingPage';
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path='booking-table' element={<BookingPage />} />
            </Routes>
        </Router>
    );
};

export default App;

