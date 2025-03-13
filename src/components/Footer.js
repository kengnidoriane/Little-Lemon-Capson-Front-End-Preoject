import React from 'react';
import { Link } from 'react-router-dom'; // Importation de Link depuis react-router-dom

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Colonne 1 : Logo */}
                <div className="footer-column logo">
                    <img src="/images/logo.png" alt="Logo" />
                    <p>Little Lemon</p>
                </div>

                {/* Colonne 2 : Liens de navigation */}
                <div className="footer-column navigation">
                    <h3>Navigation</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                {/* Colonne 3 : Contact */}
                <div className="footer-column contact">
                    <h3>Contact</h3>
                    <p>Email: info@littlelemon.com</p>
                    <p>Téléphone: +1 234 567 890</p>
                </div>

                {/* Colonne 4 : Liens des réseaux sociaux */}
                <div className="footer-column social-media">
                    <h3>Suivez-nous</h3>
                    <ul>
                        <li><Link to="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</Link></li>
                        <li><Link to="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</Link></li>
                        <li><Link to="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

