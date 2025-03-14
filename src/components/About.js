import React from 'react';

const About = () => {
    return (
        <section className="about">
            <div className='about-text'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    Bienvenue chez Little Lemon, où nous servons des plats délicieux inspirés de la cuisine méditerranéenne. 
                    Notre mission est de vous offrir une expérience culinaire exceptionnelle avec des ingrédients frais et de qualité.
                </p>
            </div>
            <div className="photo-container">
                <img src="/images/Mario and Adrian A.jpg" alt="owner restaurant" className="photo" />
                <img src="/images/Mario and Adrian b.jpg" alt="owner restaurant" className="photo" />
            </div>
        </section>
    );
};

export default About;
