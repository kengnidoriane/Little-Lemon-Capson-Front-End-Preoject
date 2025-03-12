import React from 'react';

// Table d'objets représentant les plats spéciaux
const specials = [
    {
        id: 1,
        name: 'Greek salad',
        price: '12.99 €',
        description: 'Pâtes traditionnelles avec une sauce crémeuse au parmesan et pancetta.',
        image: '/images/spaghetti.jpg', // Assurez-vous que l'image est dans le dossier public/images
        orderLink: '#order-greek-salad'
    },
    {
        id: 2,
        name: 'Bruchetta',
        price: '5.99 €',
        description: 'Pizza classique avec tomate, mozzarella et basilic frais.',
        image: '/images/pizza.jpg', // Assurez-vous que l'image est dans le dossier public/images
        orderLink: '#order-bruchetta'
    },
    {
        id: 3,
        name: 'Lemon dessert',
        price: '3.99 €',
        description: 'Salade romaine avec croutons, poulet grillé et sauce César.',
        image: '/images/salad.jpg', // Assurez-vous que l'image est dans le dossier public/images
        orderLink: '#order-lemon-dessert'
    }
];

const SpecialMenu = () => {
    return (
        <section className="special-menu">
            <div className="special-menu-header">
                <h2>This Week's Specials</h2>
                <button className="cta-button">Online Menu</button>
            </div>
            <div className="special-menu-cards">
                {specials.map(special => (
                    <div key={special.id} className="special-card">
                        <img src={special.image} alt={special.name} />
                        <h3>{special.name}</h3>
                        <p className="price">{special.price}</p>
                        <p className="description">{special.description}</p>
                        <a href={special.orderLink} className="order-link">Order Delivery</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SpecialMenu;
