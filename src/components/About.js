import React from 'react';
import './About.css'; // Assurez-vous d'importer le fichier CSS pour le style

const About = () => {
    return (
        <section className="about">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
                Bienvenue chez Little Lemon, où nous servons des plats délicieux inspirés de la cuisine méditerranéenne. 
                Notre mission est de vous offrir une expérience culinaire exceptionnelle avec des ingrédients frais et de qualité.
            </p>
            <div className="photo-container">
                <img src="/images/photo1.jpg" alt="owner restaurant" className="photo" />
                <img src="/images/photo2.jpg" alt="owner restaurant" className="photo" />
            </div>
        </section>
    );
};

export default About;
