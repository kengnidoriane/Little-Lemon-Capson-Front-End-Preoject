import React from 'react';

const Hero = () => {
    return (
        <section className="hero">
            <div className='hero-total-content'>
                <div className="hero-content">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        Découvrez notre restaurant, où la cuisine méditerranéenne rencontre l'hospitalité chaleureuse.
                        Réservez une table pour une expérience inoubliable !
                    </p>
                    <button className="cta-button">Reserve a Table</button>
                </div>
                <div className="hero-image">
                    <img src="/images/hero_image.jpg" alt="Delicious food" /> {/* Remplacez "hero-image.jpg" par le chemin réel de votre image */}
                </div>
            </div>
        </section>
    );
};

export default Hero;
