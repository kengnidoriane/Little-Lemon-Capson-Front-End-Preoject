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

    const [errors, setErrors] = useState({}); // État pour les erreurs de validation

    useEffect(() => {
        // Remplir les champs avec les données initiales si elles existent
        if (initialData) {
            setFormData(initialData);
        }
    }, [initialData]);

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.occasion) newErrors.occasion = 'Occasion is required';
        if (!formData.date) newErrors.date = 'Date is required';
        if (!formData.time) newErrors.time = 'Time is required';
        if (!formData.guests || formData.guests < 1) newErrors.guests = 'At least 1 guest is required';
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Retourne vrai si aucune erreur
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Si la date est modifiée, mettre à jour les heures disponibles
        if (name === 'date') {
            updateTimes(value); // Déclencher l'action pour mettre à jour les heures
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            onContinue(formData); // Passer les données du formulaire au composant parent
        }
    };

    return (
        <form className="booking-form" onSubmit={handleSubmit} aria-label='Reservation Form'>
            <h2>Table Reservation</h2>
             <label htmlFor="name">Your Name</label>
            <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                aria-label="On Click"
            />
            {errors.name && <span className="error">{errors.name}</span>}

            <label htmlFor="occasion">Select Occasion</label>
            <select
                id="occasion"
                name="occasion"
                value={formData.occasion}
                onChange={handleChange}
                required
                aria-label="On Click"
            >
                <option value="">Select Occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Wedding">Wedding</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Other">Other</option>
            </select>
            {errors.occasion && <span className="error">{errors.occasion}</span>}

                <label htmlFor="date">Date</label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    aria-label="On Click"
                />
            {errors.date && <span className="error">{errors.date}</span>}

            <label htmlFor="time">Select Time</label>
            <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                aria-label="On Click"
            >
                <option value="">Select Time</option>
                {availableTimes.map((time) => (
                    <option key={time} value={time}>{time}</option>
                ))}
            </select>
            {errors.time && <span className="error">{errors.time}</span>}
            
            <label htmlFor="guests">Number of Guests</label>
            <input
                type="number"
                id="guests"
                name="guests"
                placeholder="Number of Guests"
                value={formData.guests}
                onChange={handleChange}
                required
                min={1}
                aria-label="On Click"
            />
            {errors.guests && <span className="error">{errors.guests}</span>}
            
            <label htmlFor="email">Email for Confirmation</label>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="Email for Confirmation"
                value={formData.email}
                onChange={handleChange}
                required
                aria-label="On Click"
            />
            {errors.email && <span className="error">{errors.email}</span>}
            
            <button type="submit" aria-label='On Click' disabled={Object.keys(errors).length > 0}>Continue</button>
        </form>
    );
};

export default BookingForm;
