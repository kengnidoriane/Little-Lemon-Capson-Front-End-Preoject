import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage'; // Assurez-vous d'importer vos composants
import './App.css'
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} /> {/* Route pour la page d'accueil */}
            </Routes>
        </Router>
    );
};

export default App;

