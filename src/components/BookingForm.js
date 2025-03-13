import React, { useState, useEffect } from 'react';

const BookingForm = ({ onContinue, availableTimes, updateTimes, initialData }) => {
    const [formData, setFormData] = useState({
        name: '',
        occasion: '',
        date: '',
        time: '',
        guests: '',
        email: '',
    });

    useEffect(() => {
        // Remplir les champs avec les données initiales si elles existent
        if (initialData) {
            setFormData(initialData);
        }
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Si la date est modifiée, mettre à jour les heures disponibles
        if (name === 'date') {
            updateTimes(value); // Déclencher l'action pour mettre à jour les heures
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onContinue(formData); // Passer les données du formulaire au composant parent
    };

    return (
        <form className="booking-form" onSubmit={handleSubmit}>
            <h2>Table Reservation</h2>
            <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <select name="occasion" value={formData.occasion} onChange={handleChange} required>
                <option value="">Select Occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Wedding">Wedding</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Other">Other</option>
            </select>
            <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
            />
            <select name="time" value={formData.time} onChange={handleChange} required>
                <option value="">Select Time</option>
                {availableTimes.map((time) => (
                    <option key={time} value={time}>{time}</option>
                ))}
            </select>
            <input
                type="number"
                name="guests"
                placeholder="Number of Guests"
                value={formData.guests}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Email for Confirmation"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <button type="submit">Continue</button>
        </form>
    );
};

export default BookingForm;