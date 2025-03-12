import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="./images/Logo.svg" alt="Logo" /> {/* Remplacez "logo.png" par le chemin réel de votre logo */}
            </div>
            <ul className="navbar-links">
                <li><Link to="#home">Home</Link></li>
                <li><Link to="#about">About</Link></li>
                <li><Link to="#menu">Menu</Link></li>
                <li><Link to="#reservations">Reservations</Link></li>
                <li><Link to="#order-online">Order Online</Link></li>
                <li><Link to="#login">Login</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;


