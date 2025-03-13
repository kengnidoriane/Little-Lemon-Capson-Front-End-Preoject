import React from 'react';

const testimonialsData = [
    {
        id: 1,
        name: 'Alice Dupont',
        photo: '/images/user1.jpg',
        rating: 5,
        review: 'Une expérience incroyable! La nourriture était délicieuse et le service exceptionnel.',
    },
    {
        id: 2,
        name: 'Marc Martin',
        photo: '/images/user2.jpg',
        rating: 4,
        review: 'Un endroit charmant avec une ambiance relaxante. Je reviendrai certainement!',
    },
    {
        id: 3,
        name: 'Sophie Laurent',
        photo: '/images/user3.jpg',
        rating: 5,
        review: 'Chaque plat était un délice. Je recommande vivement Little Lemon!',
    },
];

const Testimonial = () => {
    return (
        <section className="testimonial">
            <h2>Testimonials</h2>
            <div className="testimonial-container">
                {testimonialsData.map(({ id, name, photo, rating, review }) => (
                    <div key={id} className="testimonial-card">
                        <div className="rating">
                            {'★'.repeat(rating)}{' '}
                            {'☆'.repeat(5 - rating)} {/* Affiche les étoiles */}
                        </div>
                        <div className="user-profile">
                            <img src={photo} alt={name} className="user-photo" />
                            <p className="user-name">{name}</p>
                        </div>
                        <p className="review">{review}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonial;
